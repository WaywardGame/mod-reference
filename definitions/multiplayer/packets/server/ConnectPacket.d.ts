import { ConnectionState } from "Enums";
import { IPlayerOptions } from "game/IGame";
import ServerPacket from "multiplayer/packets/ServerPacket";
export default class ConnectPacket extends ServerPacket {
    playerOptions: IPlayerOptions;
    getAllowedStates(): ConnectionState;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
