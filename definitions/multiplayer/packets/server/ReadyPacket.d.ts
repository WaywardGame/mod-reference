import { ConnectionState } from "Enums";
import ServerPacket from "multiplayer/packets/ServerPacket";
/**
 * The player sends this to the server when they are caught up
 * We can now mark the player as ready
 */
export default class ReadyPacket extends ServerPacket {
    getAllowedStates(): ConnectionState;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
