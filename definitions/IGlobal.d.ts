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
import ITrello from "trello/ITrello";
import { ISortable, ISortableOptions } from "ui/functional/IFunctionalSortable";
import { ITooltip, ITooltipOptions } from "ui/functional/IFunctionalTooltip";
import IUi from "ui/IUi";

declare global {
	interface Description<T> {
		[index: number]: T;
	}

	interface SafeDescription<T> {
		[index: number]: T | undefined;
	}

	type SafeArray<T> = Array<T | undefined>;

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
	let trello: ITrello;
	let ui: IUi;
	let world: IWorld;

	// tslint:disable-next-line:variable-name
	let Module: IWaywardCPP;

	interface IWaywardCPP {
		ByteGrid: IByteGridConstructor;
		FlowField: any;
		FieldOfView: any;
		WorldLayer: any;
	}

	interface IByteGridConstructor {
		new(width: number, height: number): IByteGrid;
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
}
