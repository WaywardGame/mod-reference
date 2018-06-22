import { UiTranslation } from "language/ILanguage";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class DisconnectPacket extends ClientPacket {
    message: UiTranslation;
    process(): void;
}
