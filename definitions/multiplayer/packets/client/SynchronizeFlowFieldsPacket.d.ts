import ClientPacket from "multiplayer/packets/ClientPacket";
export default class SynchronizeFlowFieldsPacket extends ClientPacket {
    pids: number[];
    process(): void;
}
