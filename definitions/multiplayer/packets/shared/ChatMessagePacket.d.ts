import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
export default class ChatMessagePacket extends PlayerTargetedSharedPacket {
    message: string;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
