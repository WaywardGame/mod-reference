/*!
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
    Vector2 = 29
}
export declare function SaveProperty(): PropertyDecorator;
export declare function SaveAllProperties(): ClassDecorator;
