import ClientPacket from "multiplayer/packets/ClientPacket";
import { IPlayer } from "player/IPlayer";
export default abstract class PlayerTargetedClientPacket extends ClientPacket {
    pid: number;
    player: IPlayer;
    preProcess(): void;
    protected preWriteData(): void;
    protected preReadData(): void;
}
