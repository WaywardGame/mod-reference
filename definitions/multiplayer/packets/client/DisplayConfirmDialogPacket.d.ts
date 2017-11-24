import { UiTranslation } from "language/ILanguage";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class DisplayConfirmDialogPacket extends ClientPacket {
    title: UiTranslation;
    description: UiTranslation;
    process(): Promise<void>;
}
