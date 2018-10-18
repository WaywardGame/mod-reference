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
import { ActionType } from "action2/IAction";
import EntityTargetedSharedPacket from "multiplayer/packets/EntityTargetedSharedPacket";
export default class ActionPacket2 extends EntityTargetedSharedPacket {
    action: ActionType;
    arguments: any[];
    getDebugInfo(): string;
    process(): void;
    protected writeData(): void;
    protected readData(): void;
    private writeArgument;
    private readArgument;
}
