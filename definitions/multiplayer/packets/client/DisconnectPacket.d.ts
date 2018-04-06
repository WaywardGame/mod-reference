import ClientPacket from "multiplayer/packets/ClientPacket";
import { TextOrTranslationData } from "newui/element/IUiElement";
export default class DisconnectPacket extends ClientPacket {
    message: TextOrTranslationData;
    process(): void;
}
