export interface ISerializer {
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
    Function = 26
}
export declare function SaveProperty(): PropertyDecorator;
export declare function SaveAllProperties(): ClassDecorator;
