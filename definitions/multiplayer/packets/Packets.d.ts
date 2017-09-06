import { IConnection } from "multiplayer/IMultiplayer";
import { IPacket } from "multiplayer/packets/IPacket";
export interface IPacketClass {
    new (connection?: IConnection): IPacket;
    getId(): void;
    setId(id: number): void;
}
export declare const registeredPackets: IPacketClass[];
export declare function initialize(): void;
