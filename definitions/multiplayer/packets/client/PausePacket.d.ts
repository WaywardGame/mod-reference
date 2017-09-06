import ClientPacket from "multiplayer/packets/ClientPacket";
export default class PausePacket extends ClientPacket {
    paused: boolean;
    process(): void;
}
