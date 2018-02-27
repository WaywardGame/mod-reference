import Vec2 = TSM.vec2;
import { CaseStyle, IPoint, IPointZ, IVersionInfo, SentenceCaseStyle, Source, TerrainType } from "Enums";
import { ITile } from "tile/ITerrain";
import * as Arrays from "utilities/Arrays";
import Color from "utilities/Color";
import Emitter from "utilities/Emitter";
export { Color, Emitter, Arrays };
export { sleep } from "utilities/Async";
export { download, upload } from "utilities/Files";
export declare module Console {
    function trace(source: Source, ...args: any[]): void;
    function log(source: Source, ...args: any[]): void;
    function info(source: Source, ...args: any[]): void;
    function debug(source: Source, ...args: any[]): void;
    function warn(source: Source, ...args: any[]): void;
    function error(source: Source, ...args: any[]): void;
}
export interface IRandomPushed {
    seed: number;
    history?: IRandomHistory[];
}
export interface IRandomHistory {
    stack: string;
    seeds: number[];
}
export declare module Random {
    let debug: boolean;
    let seed: number;
    let pushedSeeds: IRandomPushed[];
    let history: IRandomHistory[] | undefined;
    function getSeed(): number;
    function setSeed(newSeed: number): void;
    function generateSeed(): void;
    function nextFloat(max?: number): number;
    function setDebug(value: boolean): void;
    function startHistory(): void;
    function stopHistory(): IRandomHistory[];
    /**
     * Generates a random integer between 0 (inclusive) and max (exclusive)
     */
    function nextInt(max: number): number;
    /**
     * Generates a random integer between min and max (inclusive)
     */
    function nextIntInRange(min: number, max: number): number;
    /**
     * Generates a random boolean
     */
    function nextBool(): boolean;
    /**
     * Get the chance for something
     * Returns a number between 1 and 100 (inclusive)
     */
    function nextChance(minChance?: number, chanceOutOf?: number): number;
    /**
     * Chooses a random entry in an array and returns it
     */
    function nextChoice(from: any[]): any;
    function pushSeed(newSeed?: number): void;
    function popSeed(): number;
    function tickSeed(s: number): number;
    function shuffle<T>(array: T[]): T[];
    function getElement<T>(array: T[]): T;
}
export declare module TileHelpers {
    const maskGfx = 31;
    const maskType = 4064;
    const maskTilled = 4096;
    function getGfx(tile: ITile): number;
    function getGfxRaw(data: number): number;
    function setGfx(tile: ITile, value: number): void;
    function setGfxRaw(data: number, value: number): number;
    function getType(tile: ITile): TerrainType;
    function getTypeRaw(data: number): TerrainType;
    function setType(tile: ITile, value: TerrainType): void;
    function setTypeRaw(data: number, value: TerrainType): number;
    function isTilled(tile: ITile): boolean;
    function isTilledRaw(data: number): boolean;
    function setTilled(tile: ITile, value: boolean): void;
    function setTilledRaw(data: number, value: number): number;
    function findMatchingTile(start: IPointZ, isMatchingTile?: (point: IPointZ, tile: ITile) => boolean, maxTilesChecked?: number, canVisitTile?: (point: IPointZ, tile: ITile) => boolean): IPointZ | undefined;
    /**
     * Check is a tile is open
     */
    function isOpenTile(point: IPointZ, tile: ITile): boolean;
    /**
     * Check if a tile is a suitable spawn point
     */
    function isSuitableSpawnPointTile(point: IPointZ, tile: ITile): boolean;
}
export declare module WebWorkerHelpers {
    class WebWorker {
        private worker;
        private blobUrl;
        private callback;
        constructor(workerFunction: (data: any) => void);
        getWorker(): Worker;
        setCallback(callback: (evt: any) => void): void;
        free(): void;
    }
    function create(workerFunction: (data: any) => void, messageCallbackFunction: (evt: any) => void): Worker;
    function createReusable(workerFunction: (data: any) => void): WebWorker;
    function enumToString(name: string, values: any, withStrings?: boolean): string;
    function moduleToString(moduleName: string, name: string, moduleToConvert: any, globalVariables?: string[]): string;
}
export declare module WebAssemblyHelpers {
    enum Module {
        FlowField = 0,
        FieldOfView = 1,
    }
    interface IWebAssemblyModuleInstance {
        imports: IWebAssemblyImports;
        exports: any;
        instance: any;
        memoryBuffer: ArrayBuffer;
    }
    interface IWebAssemblyImports {
        env: IWebAssemblyImportsEnvironment;
    }
    interface IWebAssemblyImportsEnvironment {
        memoryBase: number;
        tableBase: number;
        memory: any;
        table: any;
    }
    function isAvailable(): boolean;
    function loadAndCompileModules(): void;
    function initializeInstance(moduleId: Module, id: number, imports?: any): IWebAssemblyModuleInstance | undefined;
}
export declare module Enums {
    enum EnumId {
        CreatureType = 0,
        Bindable = 1,
        ActionType = 2,
        ItemType = 3,
        TerrainType = 4,
        DoodadType = 5,
        Message = 6,
        SkillType = 7,
        HairStyle = 8,
        HairColor = 9,
        SkinColor = 10,
        Dictionary = 11,
        LanguageExtension = 12,
        Music = 13,
        SoundEffect = 14,
        Command = 15,
    }
    interface IEnumInfo {
        enumId: EnumId;
        enumName: string;
        enumNumber: number;
        name: string;
        onUnallocate?: ((index: number) => void);
        modIndex?: number;
    }
    function initialize(): void;
    function initializeGameState(): void;
    function setup(id: EnumId, enumObject: any, object: any, modStart?: number): void;
    function isValid(enumObject: any, index: number): boolean;
    function getOfficialMax(enumObject: any): number;
    function getModStart(enumObject: any): number;
    function isModdable(enumObject: any): boolean;
    function restore(): void;
    function reset(): void;
    function allocate(modIndex: number, id: EnumId, name: string, objectValue?: ((enumNumber: number) => any) | any, onAllocate?: ((enumNumber: number) => void), onUnallocate?: ((enumNumber: number) => void)): IEnumInfo | undefined;
    function unallocate(enumInfo: IEnumInfo): void;
    function unallocateMod(modIndex: number): void;
    function findKey(enumObject: any, keyToFind: string): number | undefined;
    function getKeys(enumObject: any): string[];
    function getLength(enumObject: any): number;
    function getRandomIndex(enumObject: any): number;
    function getValues(enumObject: any): number[];
    function forEach<Enum extends number>(enumObject: any, callback: (name: string, value: Enum) => boolean | void | Promise<boolean | void>): void;
    function forEachAsync<Enum extends number>(enumObject: any, callback: (name: string, value: Enum) => boolean | void | Promise<boolean | void>): Promise<void>;
    function toString(enumObject: any, n: number): string;
    function getNext(enumObject: any, n: number): number;
    function getPrevious(enumObject: any, n: number): number;
}
export declare module Strings {
    function formatSentenceCase(text: string, textCase: SentenceCaseStyle): string;
    function isFirstLetterCapital(str: string): boolean;
    function capitalizeFirstLetter(str: string): string;
    function formatCaseStyle(str: string, caseStyle: CaseStyle): string;
}
export declare module Math2 {
    function clamp255(value: number): number;
    function clamp01(value: number): number;
    function clamp(value: number, min: number, max: number): number;
    function roundNumber(num: number, dec: number): number;
    function lerp(from: number, to: number, t: number): number;
    function easeInQuad(time: number, start: number, change: number, duration: number): number;
    function easeInCubic(time: number, start: number, change: number, duration: number): number;
    function isInBound2Wrapped(bound: Bound3, x: number, y: number): boolean;
    function isInBound3Wrapped(bound: Bound3, x: number, y: number, z: number): boolean;
}
export declare class Bound3 {
    min: Vec2;
    max: Vec2;
    z: number;
    constructor(min: Vec2, max: Vec2, z: number);
}
export declare function copyPointZ(pointZ: IPointZ | undefined): IPointZ | undefined;
export declare function getTileVariation(x: number, y: number): number;
export declare function createUniqueIdentifier(): string;
export declare class Queue<T> {
    private queue;
    private offset;
    constructor(initial?: T[]);
    getLength(): number;
    isEmpty(): boolean;
    enqueue(value: T): void;
    dequeue(): T | undefined;
    isInQueue(item: T, equals?: (item1: T, item2: T) => boolean): boolean;
}
export declare function debounce(id: string, callback: () => void, timeout: number): void;
export declare function windowKeysToObject(keys: string[]): any;
export declare function windowKeysToParentObject(keys: string[]): any;
export declare function objectDeepClone<T>(obj: T): T;
export declare function getVersionInfo(version: string): IVersionInfo;
export declare function isSameVersion(version: IVersionInfo, compareVersion: IVersionInfo): boolean;
export declare function getVersionDisplayString(version?: string | IVersionInfo): string;
export declare function parseMarkup(markupText: string): string;
export declare function arrayEquals(array1: any[] | undefined, array2: any[] | undefined): boolean;
export declare function arrayIncludes(arr: any[], find: any): boolean;
export declare function findUnusedId<T>(source: Source, things: T[]): number;
export declare function escapeHTML(str: string): string;
export declare function stripHTML(str: string): string;
export declare function fixObjectCaseStyle(obj: any, caseStyle: CaseStyle, whitelist?: string[]): any;
export declare function stripParentDirectoryAccessorsFromPath(path: string): string;
export declare function encodeURIComponentPath(p: string): string;
export declare function isDistanceBetweenLessThan(value: number, a: IPoint, b: IPoint): boolean;
export declare function distanceBetween(a: IPoint, b: IPoint): number;
export declare function parseCommandLineArgument(name: string, args: string): string | undefined;
