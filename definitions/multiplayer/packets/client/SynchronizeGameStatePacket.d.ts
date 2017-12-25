import ClientPacket from "multiplayer/packets/ClientPacket";
export default class SynchronizeGameStatePacket extends ClientPacket {
    serverGameState: string;
    isSyncCheckEnabled(): boolean;
    process(): void;
    protected getInitialBufferSize(): number;
}
