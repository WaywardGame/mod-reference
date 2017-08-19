import { ConnectionState } from "Enums";
import { IMultiplayerWorldData } from "multiplayer/IMultiplayer";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class WorldPacket extends ClientPacket {
    data: IMultiplayerWorldData;
    protected getInitialBufferSize(): number;
    getAllowedStates(): ConnectionState;
    process(): void;
}
