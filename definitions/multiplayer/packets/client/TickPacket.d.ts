import ClientPacket from "multiplayer/packets/ClientPacket";
export default class TickPacket extends ClientPacket {
    process(): void;
    protected getInitialBufferSize(): number;
}
