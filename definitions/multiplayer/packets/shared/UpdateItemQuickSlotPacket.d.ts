import { IItem } from "item/IItem";
import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
export default class UpdateItemQuickSlotPacket extends PlayerTargetedSharedPacket {
    item: IItem;
    quickSlot: number | undefined;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
