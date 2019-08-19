/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
export interface ISerializer {
    readonly dataView: DataView;
    byteOffset: number;
    saveToUint8Array(object: any, objectKey: any): Uint8Array | undefined;
    saveToString(object: any, objectKey: any): string | undefined;
    load(object: any, objectKey: any, data: string | Uint8Array): void;
    loadFromUint8Array(object: any, objectKey: any, bytes: Uint8Array): void;
    loadFromString(object: any, objectKey: any, data: string): void;
    readProperty(object: any, key: any): void;
    writeProperty(object: any, key: any): void;
}
export default ISerializer;
export interface ISerializable {
    serializeObject(serializer: ISerializer): void;
    deserializeObject(serializer: ISerializer): void;
}
export interface IPreSerializeCallback {
    preSerializeObject(): void;
}
export interface IUnserializedCallback {
    onUnserialized(): void;
}
export interface IPropSerializable {
    getSerializationProperties(version: string): string[];
}
/**
 * Do not add anything to this list unless Spacetech approves it
 */
/**
 * Do not add anything to this list unless Spacetech approves it
 */
/**
 * Do not add anything to this list unless Spacetech approves it
 */
/**
 * Do not add anything to this list unless Spacetech approves it
 */
export declare enum Types {
    Invalid = 0,
    Undefined = 1,
    Null = 2,
    Boolean = 3,
    ByteSigned = 4,
    ByteUnsigned = 5,
    ShortSigned = 6,
    ShortUnsigned = 7,
    IntegerSigned = 8,
    IntegerUnsigned = 9,
    Float32 = 10,
    Float64 = 11,
    String = 12,
    Array = 13,
    Object = 14,
    ArrayBuffer = 15,
    Item = 16,
    Creature = 17,
    TimeManager = 18,
    Player = 19,
    ArrayV2 = 20,
    Doodad = 21,
    NPC = 22,
    Map = 23,
    DoodadV2 = 24,
    MessageManager = 25,
    Function = 26,
    ClientStore = 27,
    Vector3 = 28,
    Vector2 = 29,
    Set = 30,
    RandomRange = 31,
    RandomItem = 32
}
export declare const SYMBOL_SAVE_PROPERTIES: unique symbol;
export declare const SYMBOL_SAVE_PROPERTY_FLAGS: unique symbol;
export declare const SYMBOL_SAVE_ALL_PROPERTIES: unique symbol;
export declare enum SavePropertyFlag {
    /**
     * Normal property
     */
    Normal = 1,
    /**
     * Exclude this property from being included in the game state json
     * This likely means the property is not fully synced between the server and client
     */
    ExcludeFromGameStateJson = 2,
    /**
     * Exclude this property from being included in the game state json when in singleplayer
     * This should be used for certain properties that can change between new games that use the same seed
     */
    ExcludeFromGameStateJsonInSingleplayer = 4,
    All = 65535
}
export declare function SaveProperty(flags?: SavePropertyFlag): PropertyDecorator;
export declare function SaveAllProperties(): ClassDecorator;
