import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
import { IQuickSlotInfo } from "ui/IUi";
export default class UpdateQuickSlotInfoPacket extends PlayerTargetedServerPacket {
    quickSlot: number;
    quickSlotInfo: IQuickSlotInfo | undefined;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
