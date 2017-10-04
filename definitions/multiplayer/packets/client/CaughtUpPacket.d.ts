import ClientPacket from "multiplayer/packets/ClientPacket";
/**
 * This should be the last packet the player receives before they are caught up
 * Tell the server to mark us as ready
 */
export default class CaughtUpPacket extends ClientPacket {
    process(): void;
}
