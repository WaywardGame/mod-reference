import { ConnectionState } from "Enums";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class LoadedPacket extends ClientPacket {
    getAllowedStates(): ConnectionState;
    process(): void;
}
