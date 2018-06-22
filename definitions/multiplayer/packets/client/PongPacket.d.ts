import ClientPacket from "multiplayer/packets/ClientPacket";
export default class PongPacket extends ClientPacket {
    sendTime: number;
    process(): void;
}
