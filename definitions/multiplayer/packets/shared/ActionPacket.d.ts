/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
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
import { IActionArgument } from "action/IAction";
import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
export default class ActionPacket extends PlayerTargetedSharedPacket {
    action: IActionArgument;
    getDebugInfo(): string;
    process(): void;
    protected getIndexSize(): number;
    protected writeData(): void;
    protected readData(): void;
}
