import { UiMessage } from "language/ILanguage";
import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
export default class ConfirmDialogSelectionPacket extends PlayerTargetedServerPacket {
    id: UiMessage;
    selection: UiMessage;
    process(): void;
}
