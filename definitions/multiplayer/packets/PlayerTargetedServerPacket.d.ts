import ServerPacket from "multiplayer/packets/ServerPacket";
import { IPlayer } from "player/IPlayer";
export default abstract class PlayerTargetedServerPacket extends ServerPacket {
    pid: number;
    player: IPlayer;
    preProcess(): void;
}
