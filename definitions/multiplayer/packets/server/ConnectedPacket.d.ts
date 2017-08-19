import { ConnectionState } from "Enums";
import ServerPacket from "multiplayer/packets/ServerPacket";
export default class ConnectedPacket extends ServerPacket {
    getAllowedStates(): ConnectionState;
    process(): void;
}
