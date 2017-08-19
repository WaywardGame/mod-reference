import { UiMessage } from "language/ILanguage";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class DisplayConfirmDialogPacket extends ClientPacket {
    id: UiMessage;
    message: string;
    buttons: UiMessage[];
    process(): void;
}
