/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 * 
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 * 
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */

import WAudio from "audio/Audio";
import CommandManager from "command/CommandManager";
import DoodadManager from "doodad/DoodadManager";
import CorpseManager from "entity/creature/corpse/CorpseManager";
import CreatureManager from "entity/creature/CreatureManager";
import FlowFieldManager from "entity/flowfield/FlowFieldManager";
import Human from "entity/Human";
import NPC from "entity/npc/NPC";
import NPCManager from "entity/npc/NPCManager";
import Player from "entity/player/Player";
import Game from "game/Game";
import { ItemType } from "item/IItem";
import ItemManager from "item/ItemManager";
import LanguageManager from "language/LanguageManager";
import HookManager from "mod/HookManager";
import ModManager from "mod/ModManager";
import { IMultiplayerNetworkingOptions } from "multiplayer/IMultiplayer";
import Multiplayer from "multiplayer/Multiplayer";
import GameScreen from "newui/screen/screens/GameScreen";
import FieldOfView from "renderer/fieldofview/FieldOfView";
import { IByteGrid } from "renderer/fieldofview/IByteGrid";
import SpriteAtlas from "renderer/SpriteAtlas";
import TileAtlas from "renderer/TileAtlas";
import World from "renderer/World";
import WorldRenderer from "renderer/WorldRenderer";
import ResourceLoader from "resource/ResourceLoader";
import SaveData from "save/data/SaveData";
import SaveDataGlobal from "save/data/SaveDataGlobal";
import SaveManager from "save/SaveManager";
import Steamworks from "steamworks/Steamworks";
import TileEventManager from "tile/TileEventManager";
import { ISortable, ISortableOptions } from "ui/functional/IFunctionalSortable";
import { ITooltip, ITooltipOptions } from "ui/functional/IFunctionalTooltip";
import Ui from "ui/Ui";

declare global {

	////////////////////////////////////
	// Allow Async Iterators
	//

	interface AsyncIterator<T> {
		next(value?: any): Promise<IteratorResult<T>>;
		return?(value?: any): Promise<IteratorResult<T>>;
		throw?(e?: any): Promise<IteratorResult<T>>;
	}

	interface SymbolConstructor {
		readonly asyncIterator: unique symbol;
	}

	////////////////////////////////////
	// Make `bind` types better
	//

	interface CallableFunction extends Function {
		bind<T, A0, A1, A2, A3, A4, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A6, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A8, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9): (...args: A) => R;
	}

	////////////////////////////////////
	// Globals
	//

	// autosort
	let absentPlayers: Player[];
	let audio: WAudio;
	let commandManager: CommandManager;
	let corpseManager: CorpseManager;
	let creatureManager: CreatureManager;
	let doodadManager: DoodadManager;
	let fieldOfView: FieldOfView;
	let flowFieldManager: FlowFieldManager;
	let game: Game;
	let gameScreen: GameScreen | undefined;
	let hookManager: HookManager;
	let itemManager: ItemManager;
	let languageManager: LanguageManager;
	let localPlayer: Player;
	let modManager: ModManager;
	let multiplayer: Multiplayer;
	let multiplayerNetworkingOptions: IMultiplayerNetworkingOptions;
	let npcManager: NPCManager;
	let players: Player[];
	let renderer: WorldRenderer;
	let resourceLoader: ResourceLoader;
	let saveData: SaveData;
	let saveDataGlobal: SaveDataGlobal;
	let saveManager: SaveManager;
	let spriteAtlas: SpriteAtlas;
	let steamworks: Steamworks;
	let tileAtlas: TileAtlas;
	let tileEventManager: TileEventManager;
	let ui: Ui;
	let world: World;

	function Override(_target: any, _propertyKey: string, _descriptor?: PropertyDescriptor): void;
	function Bound<T extends AnyFunction>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
	function Final<T extends AnyFunction>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;

	const VIEWPORT_MIN_WIDTH: number;
	const VIEWPORT_MIN_HEIGHT: number;

	// tslint:disable-next-line:variable-name
	let Module: IWaywardCPP;

	interface IWaywardCPP {
		ByteGrid: IByteGridConstructor;
		FlowField: any;
		FieldOfView: any;
		WorldLayer: any;
		Navigation: INavigationConstructor;
		DijkstraMap: IDijkstraMapConstructor;
		KDTree: IKDTreeConstructor;
	}

	interface IColorGrid {
		width: number;
		height: number;
		data: Uint8Array;

		getRed(x: number, y: number): number;
		getGreen(x: number, y: number): number;
		getBlue(x: number, y: number): number;
		getAlpha(x: number, y: number): number;

		set(x: number, y: number, red: number, blue: number, green: number, alpha: number): void;
	}

	type IByteGridConstructor = new (width: number, height: number) => IByteGrid;

	type IDijkstraMapConstructor = new () => IDijkstraMap;

	interface IDijkstraMapFindPathResult {
		success: boolean;
		path: INavigationNode[];
		score: number;
		endX: number;
		endY: number;
	}

	interface IDijkstraMap {
		getNode(x: number, y: number): INavigationNode;
		updateOrigin(origin: INavigationNode): void;
		findPath(end: INavigationNode): { success: boolean, path: INavigationNode[]; score: number; };
		findPath2(result: IDijkstraMapFindPathResult): void;
		delete(): void;
	}

	type INavigationConstructor = new (autoConnect: boolean) => INavigation;

	interface INavigation {
		getNode(x: number, y: number): INavigationNode;
		findPath(start: INavigationNode, end: INavigationNode): { path: INavigationNode[]; scoreG: number; scoreH: number; scoreF: number; } | undefined;
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

	interface IKDTree {
		insertPoint(x: number, y: number): void;
		deletePoint(x: number, y: number): void;
		nearestPoints(x: number, y: number): Array<{ x: number; y: number }>;
		delete(): void;
	}

	type IKDTreeConstructor = new () => IKDTree;

	interface JQuery {
		getItemType(): ItemType;

		functionalSortable(data: string, ...args: any[]): void;
		functionalSortable(data: ISortableOptions): ISortable;

		functionalTooltip(data: string, ...args: any[]): void;
		functionalTooltip(data: ITooltipOptions): ITooltip;

		import(template: JQuery | HTMLTemplateElement): JQuery;
	}

	interface IFileSystem {
		createWriteStream(path: string, opts: any): IFileStream;
		copy(source: string, destination: string, opt: (file: string) => boolean, cb: (err: string | null | undefined) => void): any;
		emptyDir(destination: string, cb: (err: string | null | undefined) => void): any;
		stat(path: string, cb: (err: string | null | undefined, stats: IFileStat) => void): any;
		statSync(path: string): IFileStat | undefined;
		mkdirSync(path: string): any;
		existsSync(path: string): string;
		pathExistsSync(path: string): boolean;
		readdir(path: string, cb: (err: string | null | undefined, files: string[]) => void): any;
		readdirSync(path: string): string[];
		readFileSync(path: string, opt?: any): string;
		remove(path: string, cb: (err: string | null | undefined) => void): any;
		rmdirSync(path: string): any;
		unlinkSync(path: string): any;
		writeFileSync(path: string, data: string, opt?: any): any;
	}

	interface IFileStream {
		on(type: "error", callback: (err: any) => void): void;
		write(data: string): void;
		close(): void;
	}

	interface IFile extends IFileStat {
		name: string;
		path: string;
	}

	interface IFileStat {
		atime: Date;
		mtime: Date;
		ctime: Date;
		size: number;
		isFile(): boolean;
		isDirectory(): boolean;
		isSymbolicLink(): boolean;
	}

	interface IPath {
		join(...path: string[]): string;
		basename(...path: string[]): string;
		isAbsolute(path: string): boolean;
	}

	interface IElectronApi {
		crypto: any;
		fileSystem: IFileSystem;
		greenworks: any | Error;
		ipc: any;
		matchmakingServer: IMatchmakingServer | undefined;
		napi: INapi;
		os: any;
		path: IPath;
		remote: any;
		shell: any;
		ssh2: any;
		webFrame: any;
	}

	interface IElectron {
		api: IElectronApi;
		installPath: string;
		appPath: string;
		isTestMode: boolean;
	}
	let electron: IElectron | undefined | never;

	interface INapi {
		discord: INapiDiscord;
	}

	interface INapiDiscord {
		initialize(): void;
		shutdown(): void;
		runCallbacks(): void;
		setOnJoinCallback(callback: (server: string) => void): void;
		updatePresence(presenceInfo: INapiDiscordPresenceInfo): void;
	}

	interface INapiDiscordPresenceInfo {
		details: string;
		state?: string;
		largeImageKey?: string;
		largeImageText?: string;
		smallImageKey?: string;
		smallImageText?: string;
		multiplayerServerId?: string;
		multiplayerCurrentPlayers?: number;
		multiplayerMaxPlayers?: number;
	}

}
