/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
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
