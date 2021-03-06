/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import { ConnectionState } from "Enums";
import ServerPacket from "multiplayer/packets/ServerPacket";
/**
 * The player sends this to the server when they are connected
 * They probably still have packets to catch up on
 */
export default class ConnectedPacket extends ServerPacket {
    getAllowedStates(): ConnectionState;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
