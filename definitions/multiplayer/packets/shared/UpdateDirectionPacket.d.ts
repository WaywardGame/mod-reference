import { FacingDirection } from "Enums";
import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
export default class UpdateDirectionPacket extends PlayerTargetedSharedPacket {
    mouseDirection: FacingDirection | undefined;
    touchDirection: FacingDirection | undefined;
    process(): void;
}
