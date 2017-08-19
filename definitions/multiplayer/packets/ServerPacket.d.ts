import { PacketType } from "multiplayer/packets/IPacket";
import { Packet } from "multiplayer/packets/Packet";
export default abstract class ServerPacket extends Packet {
    getType(): PacketType;
}
