import ClientPacket from "multiplayer/packets/ClientPacket";
export default class PausePacket extends ClientPacket {
    paused: boolean;
    showChatMessage: boolean;
    process(): void;
}
