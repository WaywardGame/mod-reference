import { IPacketObject, PacketData, PacketObjectType } from "multiplayer/IPacket";
export declare class Packet {
    readonly data: PacketData;
    private arrayBuffer;
    static decodePacketData(buffer: Uint8Array): PacketData;
    private static encodePacketData(packet);
    private static cleanPacketData(packetData);
    constructor(data: PacketData);
    getArrayBuffer(): ArrayBuffer;
}
export declare function objectToPacketObject<T>(object: T | undefined, ...expectedTypes: PacketObjectType[]): IPacketObject<any> | undefined;
export declare function packetObjectToObject<T>(packetObject: IPacketObject<T> | undefined): T | undefined;
