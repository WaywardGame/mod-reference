import { KeyBind } from "Enums";
import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
export default class KeyBindStatePacket extends PlayerTargetedSharedPacket {
    bind: KeyBind | undefined;
    value: number | undefined;
    process(): void;
}
