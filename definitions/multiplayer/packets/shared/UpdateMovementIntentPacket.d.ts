import { Bindable } from "Enums";
import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
export default class UpdateMovementIntentPacket extends PlayerTargetedSharedPacket {
    bind: Bindable | undefined;
    process(): void;
}
