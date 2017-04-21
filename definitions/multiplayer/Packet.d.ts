import { IPacketObject, PacketObjectType } from "multiplayer/IPacket";
export declare function cleanPacket(packet: any): void;
export declare function objectToPacketObject<T>(object: T | undefined, ...expectedTypes: PacketObjectType[]): IPacketObject<T> | undefined;
export declare function packetObjectToObject<T>(packetObject: IPacketObject<T> | undefined): T | undefined;
