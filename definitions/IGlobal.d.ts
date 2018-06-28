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
import IItemManager from "item/IItemManager";
import ILanguageManager from "language/ILanguageManager";
import IHookManager from "mod/IHookManager";
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
import IResourceLoader from "resources/IResourceLoader";
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
		[index: number]: T | undefined;
	}

	type Description2<E extends string | number, V> = { [key in E]: V } & { [key: number]: V | undefined };

	/**
	 * @deprecated
	 * @see `Description`
	 */
	interface UnsafeDescription<T> {
		[index: number]: T;
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
	let hookManager: IHookManager;
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

	interface IFileSystem {
		copy(source: string, destination: string, opt: (file: string) => boolean, cb: (err: string | null | undefined) => void): any;
		emptyDir(destination: string, cb: (err: string | null | undefined) => void): any;
		lstat(path: string, cb: (err: string | null | undefined, stats: IFileStat) => void): any;
		lstatSync(path: string): IFileStat | undefined;
		mkdirSync(path: string): any;
		pathExistsSync(path: string): boolean;
		readdir(path: string, cb: (err: string | null | undefined, files: string[]) => void): any;
		readdirSync(path: string): string[];
		readFileSync(path: string, opt?: any): string;
		remove(path: string, cb: (err: string | null | undefined) => void): any;
		rmdirSync(path: string): any;
		unlinkSync(path: string): any;
		writeFileSync(path: string, data: string, opt?: any): any;
	}

	interface IFile extends IFileStat {
		name: string;
		path: string;
	}

	interface IFileStat {
		atime: Date;
		mtime: Date;
		ctime: Date;
		isFile(): boolean;
		isDirectory(): boolean;
	}

	interface IElectronApi {
		greenworks: any | Error;
		ipc: any;
		shell: any;
		os: any;
		webFrame: any;
		remote: any;
		path: any;
		winston: any;
		fileSystem: IFileSystem;
		matchmakingServer: IMatchmakingServer | undefined;
	}

	interface IElectron {
		api: IElectronApi;
		installPath: string;
		appPath: string;
		isTestMode: boolean;
	}
	let electron: IElectron | undefined | never;
}
