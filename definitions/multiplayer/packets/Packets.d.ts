import { IConnection } from "multiplayer/networking/IConnection";
import { IPacket } from "multiplayer/packets/IPacket";
export interface IPacketClass {
    new (connection?: IConnection): IPacket;
    setId(id: number): void;
}
export declare const registeredPackets: IPacketClass[];
export declare function initialize(): void;
export declare function registerPacket(packet: IPacketClass): void;
export declare function unregisterPacket(packet: IPacketClass): void;
