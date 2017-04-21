export declare let serializeAllProperties: string[];
export interface ISerializer {
    readProperty(object: any, key: any): void;
    writeProperty(object: any, key: any): void;
}
export default ISerializer;
export interface ISerializable {
    serializeObject(serializer: ISerializer, version: string): void;
    deserializeObject(serializer: ISerializer, version: string): void;
}
export interface IUnserializedCallback {
    onUnserialized(): void;
}
export interface IPropSerializable {
    getSerializationProperties(version: string): string[];
}
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
}
