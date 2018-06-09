import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
import { MovementIntent } from "player/IPlayer";
export default class UpdateMovementIntentPacket extends PlayerTargetedSharedPacket {
    intent: MovementIntent;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
