import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
export default class ChatMessagePacket extends PlayerTargetedSharedPacket {
    message: string;
    process(): void;
}
