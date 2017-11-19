import { InterruptChoice, UiTranslation } from "language/ILanguage";
import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
export default class ConfirmDialogSelectionPacket extends PlayerTargetedServerPacket {
    id: UiTranslation;
    selection: InterruptChoice;
    process(): void;
}
