import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
export default class UpdateOptionPacket extends PlayerTargetedSharedPacket {
    id: string;
    value: boolean | number;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
