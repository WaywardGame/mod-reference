import Registrar, { IRegistrarItem } from "game/Registrar";
import { IConnection } from "multiplayer/networking/IConnection";
import { IPacket } from "multiplayer/packets/IPacket";
export interface IPacketClass extends IRegistrarItem {
    new (connection?: IConnection): IPacket;
}
export declare const registrar: Registrar<IPacketClass>;
