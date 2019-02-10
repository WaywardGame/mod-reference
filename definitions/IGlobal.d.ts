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

import IAudio from "audio/IAudio";
import { ICommandManager } from "command/ICommandManager";
import ICorpseManager from "creature/corpse/ICorpseManager";
import ICreatureManager from "creature/ICreatureManager";
import IDoodadManager from "doodad/IDoodadManager";
import IHuman from "entity/IHuman";
import { ItemType } from "Enums";
import { IFlowFieldManager } from "flowfield/IFlowFieldManager";
import IGame from "game/IGame";
import IItemManager from "item/IItemManager";
import LanguageManager from "language/LanguageManager";
import IHookManager from "mod/IHookManager";
import IModManager from "mod/IModManager";
import { IMultiplayer, IMultiplayerNetworkingOptions } from "multiplayer/IMultiplayer";
import NewUi from "newui/NewUi";
import { INPC } from "npc/INPC";
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
	/**
	 * An object of descriptions. Each key in E *may* map to a valid description.
	 * @param E The enum with which to index these descriptions.
	 * @param V The description type.
	 */
	type OptionalDescriptions<E extends string | number, V> = { [key in E]?: V } & { [key: number]: V | undefined };

	/**
	 * An object of descriptions. Each key in E *will* map to a valid description.
	 * @param E The enum with which to index these descriptions.
	 * @param V The description type.
	 */
	type Descriptions<E extends string | number, V> = { [key in E]: V } & { [key: number]: V | undefined };

	type Class<T> = new () => T;

	/**
	 * Changes the return type of the given function, or creates a new function from the given arguments and return type. 
	 */
	type MaskReturn<F extends any[] | ((...args: any[]) => any), R> = F extends (...args: infer A) => any ? (...args: A) => R : (...args: Extract<F, any[]>) => R;

	/**
	 * Gets the arguments tuple of a function.
	 */
	type ArgumentsOf<F extends (...args: any[]) => any> = F extends (...args: infer A) => any ? A : [];

	type SaferArray<T> = Array<T | undefined>;

	type Mutable<T> = {
		-readonly [P in keyof T]: T[P];
	};

	type Human = IPlayer | INPC | IHuman;

	let absentPlayers: IPlayer[];
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
	let languageManager: LanguageManager;
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
		KDTree: IKDTreeConstructor;
	}

	type IByteGridConstructor = new (width: number, height: number) => IByteGrid;

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

	type INavigationConstructor = new (autoConnect: boolean) => INavigation;

	interface IKDTree {
		insertPoint(x: number, y: number): void;
		deletePoint(x: number, y: number): void;
		nearestPoint(x: number, y: number): Array<{ x: number; y: number }>;
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
		greenworks: any | Error;
		napi: INapi;
		ipc: any;
		shell: any;
		os: any;
		webFrame: any;
		remote: any;
		path: IPath;
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

	function Override(_target: any, _propertyKey: string, _descriptor?: PropertyDescriptor): void;

	interface CallableFunction extends Function {
		bind<T, A0, A1, A2, A3, A4, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A6, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A8, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9): (...args: A) => R;
	}
}
