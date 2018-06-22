import ServerPacket from "multiplayer/packets/ServerPacket";
export default class PingPacket extends ServerPacket {
    sendTime: number;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
