import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
export default class LogsPacket extends PlayerTargetedServerPacket {
    logs: string;
    containsServerGameState: boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
