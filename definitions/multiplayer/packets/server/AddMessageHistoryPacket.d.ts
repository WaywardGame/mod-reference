import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
import { IMessageHistoryItem } from "player/MessageManager";
export default class AddMessageHistoryPacket extends PlayerTargetedServerPacket {
    messageHistoryItem: IMessageHistoryItem;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
