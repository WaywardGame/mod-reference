import ServerPacket from "multiplayer/packets/ServerPacket";
/**
 * The player sends this to the server every 5 seconds
 * If the server hasn't recieved this message for 15 seconds, the player is disconnected
 */
export default class KeepAlivePacket extends ServerPacket {
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
