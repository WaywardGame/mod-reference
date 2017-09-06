import { PacketType } from "multiplayer/packets/IPacket";
import { Packet } from "multiplayer/packets/Packet";
export default abstract class SharedPacket extends Packet {
    getType(): PacketType;
}
