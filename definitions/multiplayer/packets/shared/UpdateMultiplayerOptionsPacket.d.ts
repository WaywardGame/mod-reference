import { IMultiplayerOptions } from "multiplayer/IMultiplayer";
import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
export default class UpdateMultiplayerOptionsPacket extends PlayerTargetedSharedPacket {
    options: IMultiplayerOptions;
    process(): void;
}
