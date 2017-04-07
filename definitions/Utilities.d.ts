import Vec2 = TSM.vec2;
import { CaseStyle, IPointZ, ItemImage, ItemType, IVersionInfo, SentenceCaseStyle, Source, TerrainType } from "Enums";
import { ITile } from "tile/ITerrain";
import Color from "utilities/Color";
export { Color };
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
     * Chooses a random entry in an array and returns it
     */
    function nextChoice(from: any[]): any;
    function pushSeed(newSeed?: number): void;
    function popSeed(): number;
    function tickSeed(s: number): number;
    function shuffle(array: number[]): number[];
}
export declare function download(name: string, json: string): void;
export declare function upload(callback: (result: string) => void, e: Event): void;
export declare module TileHelpers {
    const maskGfx = 3;
    const maskType = 252;
    const maskTilled = 256;
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
    function findOpenTile(start: IPointZ, checkTileCallback?: (point: IPointZ, tile: ITile) => boolean): IPointZ | undefined;
    function isOpenTile(point: IPointZ, tile: ITile): boolean;
}
export declare module WebWorkerHelpers {
    function create(workerFunction: (data: any) => void, messageCallbackFunction: (evt: any) => void): Worker;
    function enumToString(name: string, values: any, withStrings?: boolean): string;
    function moduleToString(moduleName: string, name: string, moduleToConvert: any, globalVariables?: string[]): string;
}
export declare module ItemImageCache {
    function initialize(): void;
    function getItemImageUrl(itemType: ItemType, itemImage: ItemImage): string;
    function queueCreateItemImageOutlines(image: HTMLImageElement, itemType: ItemType): void;
    function cacheAllItemImageOutlines(): void;
}
export declare module Enums {
    enum EnumId {
        CreatureType = 0,
        KeyBind = 1,
        ActionType = 2,
        ItemType = 3,
        TerrainType = 4,
        DoodadType = 5,
        Message = 6,
        SkillType = 7,
        Hairstyle = 8,
        HairColor = 9,
        SkinColor = 10,
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
    function allocate(modIndex: number, id: Enums.EnumId, name: string, objectValue?: ((enumNumber: number) => any) | any, onAllocate?: ((enumNumber: number) => void), onUnallocate?: ((enumNumber: number) => void)): IEnumInfo | undefined;
    function unallocate(enumInfo: IEnumInfo): void;
    function unallocateMod(modIndex: number): void;
    function getKeys(enumObject: any): string[];
    function getLength(enumObject: any): number;
    function getRandomIndex(enumObject: any): number;
    function getValues(enumObject: any): number[];
    function forEach(enumObject: any, callback: (name: string, value: number) => boolean | void): void;
    function toString(e: any, n: number): string;
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
    function roundNumber(num: any, dec: any): number;
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
export declare function loadImage(src: any, callback: any): void;
export declare function copyPointZ(pointZ: IPointZ | undefined): IPointZ | undefined;
export declare function getTileVariation(x: number, y: number): number;
export declare function createUniqueIdentifier(): string;
export declare class Queue<T> {
    private queue;
    private offset;
    constructor(initial?: T[] | null);
    getLength(): number;
    isEmpty(): boolean;
    enqueue(value: T): void;
    dequeue(): T | null;
    isInQueue(item: T, equals?: (item1: T, item2: T) => boolean): boolean;
}
export declare function debounce(id: string, callback: () => void, timeout: number): void;
export declare function windowKeysToObject(keys: string[]): any;
export declare function windowKeysToParentObject(keys: string[]): any;
export declare function getVersionInfo(version: string): IVersionInfo;
export declare function isSameVersion(version: IVersionInfo, compareVersion: IVersionInfo): boolean;
export declare function getVersionDisplayString(version?: string | IVersionInfo): string;
export declare function parseMarkup(markupText: string): string;
export declare function arrayEquals(arr1: any[], arr2: any[]): boolean;
export declare function arrayIncludes(arr: any[], find: any): boolean;
export declare function findUnusedId(source: Source, things: any[]): number;
export declare function escapeHTML(str: string): string;
export declare function fixObjectCaseStyle(obj: any, caseStyle: CaseStyle, whitelist?: string[]): any;
export declare function stripParentDirectoryAccessorsFromPath(path: string): string;
