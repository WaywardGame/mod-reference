import { Bindable } from "Enums";
import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
export default class KeyBindStatePacket extends PlayerTargetedSharedPacket {
    bind: Bindable | undefined;
    value: number | undefined;
    process(): void;
}
