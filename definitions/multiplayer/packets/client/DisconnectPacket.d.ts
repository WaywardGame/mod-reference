import { UiMessage } from "language/ILanguage";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class DisconnectPacket extends ClientPacket {
    uiMessage: UiMessage;
    process(): void;
}
