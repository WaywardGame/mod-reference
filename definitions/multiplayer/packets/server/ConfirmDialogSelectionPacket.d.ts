import { UiTranslation } from "language/ILanguage";
import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
export default class ConfirmDialogSelectionPacket extends PlayerTargetedServerPacket {
    title: UiTranslation;
    selection: boolean;
    process(): void;
}
