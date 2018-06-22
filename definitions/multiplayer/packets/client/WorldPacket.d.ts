import { ConnectionState } from "Enums";
import { IMultiplayerWorldData } from "multiplayer/IMultiplayer";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class WorldPacket extends ClientPacket {
    data: IMultiplayerWorldData;
    getAllowedStates(): ConnectionState;
    process(): Promise<void>;
    protected getInitialBufferSize(): number;
}
