import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
import { IQuickSlotInfo } from "ui/IUi";
export default class UpdateQuickSlotInfoPacket extends PlayerTargetedServerPacket {
    quickSlot: number;
    quickSlotInfo: IQuickSlotInfo | undefined;
    process(): void;
}
