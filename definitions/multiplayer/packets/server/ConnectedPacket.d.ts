import { ConnectionState } from "Enums";
import ServerPacket from "multiplayer/packets/ServerPacket";
/**
 * The player sends this to the server when they are connected
 * They probably still have packets to catch up on
 */
export default class ConnectedPacket extends ServerPacket {
    getAllowedStates(): ConnectionState;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
