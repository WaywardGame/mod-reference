import ClientPacket from "multiplayer/packets/ClientPacket";
import { TextOrTranslationData } from "newui/INewUi";
export default class DisconnectPacket extends ClientPacket {
    message: TextOrTranslationData;
    process(): void;
}
