import SharedPacket from "multiplayer/packets/SharedPacket";
import { IPlayer } from "player/IPlayer";
export default abstract class PlayerTargetedSharedPacket extends SharedPacket {
    pid: number;
    player: IPlayer;
    preProcess(): void;
    protected preWriteData(): void;
    protected preReadData(): void;
}
