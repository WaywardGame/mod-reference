import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
import { IDialogInfo } from "ui/IUi";
export default class UpdateDialogInfoPacket extends PlayerTargetedServerPacket {
    index: string | number;
    info: IDialogInfo;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
