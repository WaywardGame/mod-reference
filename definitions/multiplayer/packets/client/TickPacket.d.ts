import ClientPacket from "multiplayer/packets/ClientPacket";
export default class TickPacket extends ClientPacket {
    isMoving: boolean[];
    noInputReceived: boolean[];
    movementComplete: boolean[];
    getDebugInfo(): string;
    process(): void;
    protected getInitialBufferSize(): number;
}
