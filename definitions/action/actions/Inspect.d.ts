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
import { IAction } from "action/IAction";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import IPlayer from "player/IPlayer";
import { MessageType } from "player/MessageManager";
import Vector3 from "utilities/math/Vector3";
import { IStringSection } from "utilities/string/Interpolator";
export declare enum InspectType {
    None = 0,
    Tile = 1,
    Doodad = 2,
    Creature = 3,
    Items = 4,
    Quality = 5,
    Player = 6,
    Corpses = 7,
    TileEvents = 8,
    NPC = 9
}
export interface IInspect {
    type?: InspectType;
    onlyShowInTooltip?: boolean;
    onlyShowInMessages?: boolean;
    message: Message | Translation | IStringSection[];
    messageType?: MessageType;
    title?: true;
}
export declare const action: IAction;
export default action;
export declare function inspect(inspectingPlayer: IPlayer, position: Vector3): IInspect[];
