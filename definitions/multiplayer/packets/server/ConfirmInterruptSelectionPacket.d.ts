import { UiTranslation } from "language/ILanguage";
import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
export default class ConfirmInterruptSelectionPacket extends PlayerTargetedServerPacket {
    title: UiTranslation;
    selection: boolean;
    process(): void;
}
