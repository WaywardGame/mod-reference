import { InterruptChoice, UiTranslation } from "language/ILanguage";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class DisplayConfirmDialogPacket extends ClientPacket {
    id: UiTranslation;
    message: string;
    buttons: InterruptChoice[];
    process(): Promise<void>;
}
