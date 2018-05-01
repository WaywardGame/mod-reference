import ClientPacket from "multiplayer/packets/ClientPacket";
import { TextOrTranslationData } from "newui/element/IComponent";
export default class DisconnectPacket extends ClientPacket {
    message: TextOrTranslationData;
    process(): void;
}
