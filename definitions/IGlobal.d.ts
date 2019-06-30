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
import IDoodadManager from "doodad/IDoodadManager";
import ICorpseManager from "entity/creature/corpse/ICorpseManager";
import ICreatureManager from "entity/creature/ICreatureManager";
import { IFlowFieldManager } from "entity/flowfield/IFlowFieldManager";
import IHuman from "entity/IHuman";
import { INPC } from "entity/npc/INPC";
import INPCManager from "entity/npc/INPCManager";
import IPlayer from "entity/player/IPlayer";
import Player from "entity/player/Player";
import IGame from "game/IGame";
import { ItemType } from "item/IItem";
import IItemManager from "item/IItemManager";
import LanguageManager from "language/LanguageManager";
import IHookManager from "mod/IHookManager";
import IModManager from "mod/IModManager";
import { IMultiplayer, IMultiplayerNetworkingOptions } from "multiplayer/IMultiplayer";
import NewUi from "newui/NewUi";
import GameScreen from "newui/screen/screens/GameScreen";
import { IByteGrid } from "renderer/fieldofview/IByteGrid";
import IFieldOfView from "renderer/fieldofview/IFieldOfView";
import ISpriteAtlas from "renderer/ISpriteAtlas";
import ITileAtlas from "renderer/ITileAtlas";
import IWorld from "renderer/IWorld";
import IWorldRenderer from "renderer/IWorldRenderer";
import IResourceLoader from "resource/IResourceLoader";
import ISaveData from "save/data/ISaveData";
import ISaveDataGlobal from "save/data/ISaveDataGlobal";
import ISaveManager from "save/ISaveManager";
import ISteamworks from "steamworks/ISteamworks";
import ITileEventManager from "tile/ITileEventManager";
import { ISortable, ISortableOptions } from "ui/functional/IFunctionalSortable";
import { ITooltip, ITooltipOptions } from "ui/functional/IFunctionalTooltip";
import IUi from "ui/IUi";

declare global {

	type AnyFunction = (...args: any[]) => any;
	type NullaryFunction<O = any> = () => O;
	type UnaryFunction<I = any, O = any> = (input: I) => O;

	type SortingFunction<T> = (a: T, b: T) => number;

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

	type NullaryClass<T> = new () => T;
	type Class<T> = new (...args: any[]) => T;
	// tslint:disable-next-line ban-types No other type will work here except "Function" 
	type AnyClass<T> = (Function & { prototype: T });

	/**
	 * Changes the return type of the given function, or creates a new function from the given arguments and return type. 
	 */
	type MaskReturn<F extends any[] | AnyFunction, R> = F extends (...args: infer A) => any ? (...args: A) => R : (...args: Extract<F, any[]>) => R;

	/**
	 * Gets the arguments tuple of a function.
	 */
	type ArgumentsOf<F extends AnyFunction | Class<any>> =
		F extends (...args: infer A) => any ? A :
		F extends new (...args: infer A) => any ? A :
		[];

	type SaferArray<T> = Array<T | undefined>;

	type Mutable<T> = {
		-readonly [P in keyof T]: T[P];
	};

	type Human = IPlayer | INPC | IHuman;

	type IterableOr<T> = T | Iterable<T>;
	type ArrayOr<T> = T | T[];

	type GeneratorOf<T> = () => Iterable<T>;

	type GetterOfOr<T> = T | (() => T);

	type ArrayOfIterablesOr<T> = Array<T | Iterable<T>>;

	type ReturnTypeOrT<T> = T extends (...args: any[]) => infer R ? R : T;
	type InstanceOf<T extends Class<any> | AnyClass<any>> = T extends Class<any> ? InstanceType<T> : T extends { prototype: infer P } ? P : never;

	type PropertyOf<T, K extends string | number | symbol> = T extends { [key in K]: infer V } ? V : never;

	type FunctionOrNoParams<H extends AnyFunction> = H | (() => ReturnType<H>);

	type Head<T extends any[]> = T[0];
	type Tail<A extends any[]> = ((...args: A) => any) extends ((_: any, ...args: infer A2) => any) ? A2 : never;

	type AddHead<H, A extends any[]> = ArgumentsOf<(arg1: H, ...args: A) => any>;

	interface AsyncIterator<T> {
		next(value?: any): Promise<IteratorResult<T>>;
		return?(value?: any): Promise<IteratorResult<T>>;
		throw?(e?: any): Promise<IteratorResult<T>>;
	}

	interface SymbolConstructor {
		readonly asyncIterator: unique symbol;
	}

	// autosort
	let absentPlayers: IPlayer[];
	let audio: IAudio;
	let commandManager: ICommandManager;
	let corpseManager: ICorpseManager;
	let creatureManager: ICreatureManager;
	let doodadManager: IDoodadManager;
	let fieldOfView: IFieldOfView;
	let flowFieldManager: IFlowFieldManager;
	let game: IGame;
	let gameScreen: GameScreen | undefined;
	let hookManager: IHookManager;
	let itemManager: IItemManager;
	let languageManager: LanguageManager;
	let localPlayer: Player;
	let modManager: IModManager;
	let multiplayer: IMultiplayer;
	let multiplayerNetworkingOptions: IMultiplayerNetworkingOptions;
	let newui: NewUi;
	let npcManager: INPCManager;
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

	function Override(_target: any, _propertyKey: string, _descriptor?: PropertyDescriptor): void;
	function Bound<T extends AnyFunction>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
	function Final<T extends AnyFunction>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;

	interface CallableFunction extends Function {
		bind<T, A0, A1, A2, A3, A4, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A6, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A8, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8): (...args: A) => R;
		bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9): (...args: A) => R;
	}
}
