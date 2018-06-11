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
import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
import { IMovementIntent } from "player/IPlayer";
export default class UpdateMovementIntentPacket extends PlayerTargetedSharedPacket {
    intent: IMovementIntent;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
