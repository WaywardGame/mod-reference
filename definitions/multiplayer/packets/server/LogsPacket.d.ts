import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
export default class LogsPacket extends PlayerTargetedServerPacket {
    logs: string;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
