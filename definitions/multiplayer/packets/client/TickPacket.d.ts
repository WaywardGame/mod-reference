import ClientPacket from "multiplayer/packets/ClientPacket";
export default class TickPacket extends ClientPacket {
    isMoving: boolean[];
    noInputReceived: boolean[];
    process(): void;
    protected getInitialBufferSize(): number;
}
