import { IPlayerOptions } from "game/IGame";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class AddPlayerPacket extends ClientPacket {
    playerOptions: IPlayerOptions;
    process(): number;
}
