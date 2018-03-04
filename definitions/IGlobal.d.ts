/*
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 * 
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 * 
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 * 
 * 
 */

import IActionManager from "action/IActionManager";
import IAudio from "audio/IAudio";
import { ICommandManager } from "command/ICommandManager";
import ICorpseManager from "creature/corpse/ICorpseManager";
import ICreatureManager from "creature/ICreatureManager";
import IDoodadManager from "doodad/IDoodadManager";
import { ItemType } from "Enums";
import { IFlowFieldManager } from "flowfield/IFlowFieldManager";
import IGame from "game/IGame";
import IResourceLoader from "IResourceLoader";
import IItemManager from "item/IItemManager";
import ILanguageManager from "language/ILanguageManager";
import IModManager from "mod/IModManager";
import { IMultiplayer, IMultiplayerNetworkingOptions } from "multiplayer/IMultiplayer";
import NewUi from "newui/NewUi";
import INPCManager from "npc/INPCManager";
import IPlayer from "player/IPlayer";
import { IByteGrid } from "renderer/fieldofview/IByteGrid";
import IFieldOfView from "renderer/fieldofview/IFieldOfView";
import ISpriteAtlas from "renderer/ISpriteAtlas";
import ITileAtlas from "renderer/ITileAtlas";
import IWorld from "renderer/IWorld";
import IWorldRenderer from "renderer/IWorldRenderer";
import ISaveData from "save/data/ISaveData";
import ISaveDataGlobal from "save/data/ISaveDataGlobal";
import ISaveManager from "save/ISaveManager";
import ISteamworks from "steamworks/ISteamworks";
import ITileEventManager from "tile/ITileEventManager";
import { ISortable, ISortableOptions } from "ui/functional/IFunctionalSortable";
import { ITooltip, ITooltipOptions } from "ui/functional/IFunctionalTooltip";
import IUi from "ui/IUi";

declare global {
	interface Description<T> {
		[index: number]: T;
	}

	interface SaferDescription<T> {
		[index: number]: T | undefined;
	}

	type SaferArray<T> = Array<T | undefined>;

	let absentPlayers: IPlayer[];
	let actionManager: IActionManager;
	let audio: IAudio;
	let commandManager: ICommandManager;
	let corpseManager: ICorpseManager;
	let creatureManager: ICreatureManager;
	let doodadManager: IDoodadManager;
	let fieldOfView: IFieldOfView;
	let flowFieldManager: IFlowFieldManager;
	let game: IGame;
	let itemManager: IItemManager;
	let languageManager: ILanguageManager;
	let localPlayer: IPlayer;
	let npcManager: INPCManager;
	let modManager: IModManager;
	let multiplayer: IMultiplayer;
	let multiplayerNetworkingOptions: IMultiplayerNetworkingOptions;
	let players: IPlayer[];
	let renderer: IWorldRenderer;
	let resourceLoader: IResourceLoader;
	let saveData: ISaveData;
	let saveDataGlobal: ISaveDataGlobal;
	let saveManager: ISaveManager;
	let spriteAtlas: ISpriteAtlas;
	let steamworks: ISteamworks;
	let tileAtlas: ITileAtlas;
	let tileEventManager: ITileEventManager;
	let ui: IUi;
	let world: IWorld;
	let newui: NewUi;

	// tslint:disable-next-line:variable-name
	let Module: IWaywardCPP;

	interface IWaywardCPP {
		ByteGrid: IByteGridConstructor;
		FlowField: any;
		FieldOfView: any;
		WorldLayer: any;
		Navigation: INavigationConstructor;
		KDTree: IKDTreeConstructor;
	}

	interface IByteGridConstructor {
		new(width: number, height: number): IByteGrid;
	}

	interface INavigation {
		getNode(x: number, y: number): INavigationNode;
		findPath(start: INavigationNode, end: INavigationNode): INavigationNode[] | undefined;
		delete(): void;
	}

	interface INavigationNode {
		x: number;
		y: number;
		disabled: boolean;
		penalty: number;
		connectTo(node: INavigationNode, direction: number): void;
		getConnection(direction: number): INavigationNode | undefined;
	}

	interface INavigationConstructor {
		new(autoConnect: boolean): INavigation;
	}

	interface IKDTree {
		insertPoint(x: number, y: number): void;
		deletePoint(x: number, y: number): void;
		nearestPoint(x: number, y: number): Array<{ x: number; y: number }>;
		delete(): void;
	}

	interface IKDTreeConstructor {
		new(): IKDTree;
	}

	interface IMsgPack {
		encode(object: any): Uint8Array;
		decode(array: Uint8Array): any;
	}
	const msgpack: IMsgPack;

	interface JQuery {
		getItemType(): ItemType;

		functionalSortable(data: string, ...args: any[]): void;
		functionalSortable(data: ISortableOptions): ISortable;

		functionalTooltip(data: string, ...args: any[]): void;
		functionalTooltip(data: ITooltipOptions): ITooltip;

		import(template: JQuery | HTMLTemplateElement): JQuery;
	}

	type IterableOf<T> = T[] | IterableIterator<T>;

	type GeneratorOf<T> = () => IterableOf<T>;

	interface IterableIterator<T> {

		/**
		 * Returns an iterable of type X, using the given map function
		 * @param mapper A function that maps an entry of type T to its corresponding type X
		 */
		map<X>(mapper: (val: T) => X): IterableIterator<X>;

		/**
		 * Returns an iterable that will loop only over the entries that match the given filter
		 * @param filter A function that returns true if the value should be included and false if it shouldn't
		 */
		filter(filter: (val: T) => boolean): IterableIterator<T>;

		/**
		 * Returns an iterable that will first loop over the entries in itself, then the entries in the given iterables
		 * @param iterables The other iterables to loop over
		 */
		include<X>(...iterables: Array<IterableOf<X>>): IterableIterator<T | X>;

		/**
		 * Returns a value of type X, generated by iterating through the iterable and calling the reducer function for each.
		 * @param reducer A function that takes the result from the previous iteration, or undefined if it's the first iteration, and returns a new result.
		 */
		reduce<X>(reducer: (oldValue: X | undefined, entry: T) => X): X;

		/**
		 * Returns a value of type X, generated with the given collector function.
		 * @param collector A function that takes the iterable, and returns type X
		 * @see `utilities/Collectors` for premade collectors
		 */
		collect<X>(collector: (val: IterableIterator<T>) => X): X;
	}

}
