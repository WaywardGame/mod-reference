import { IMultiplayerOptions } from "multiplayer/IMultiplayer";
import SharedPacket from "multiplayer/packets/SharedPacket";
export default class UpdateMultiplayerOptionsPacket extends SharedPacket {
    options: IMultiplayerOptions;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
