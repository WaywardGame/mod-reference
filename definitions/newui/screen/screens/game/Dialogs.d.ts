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
import { IVector2 } from "utilities/math/IVector";
export declare enum DialogId {
    Messages = 0,
    Notes = 1,
    MessagesEditFilters = 2,
    QuickSettings = 3
}
export declare enum Edge {
    Top = 0,
    Right = 1,
    Bottom = 2,
    Left = 3
}
export declare type IEdges = [[Edge.Left | Edge.Right, number], [Edge.Top | Edge.Bottom, number]];
export interface IDialogDescription {
    minSize: IVector2;
    size: IVector2;
    maxSize: IVector2;
    edges: IEdges;
}
declare const dialogDescriptions: Descriptions<DialogId, IDialogDescription>;
export default dialogDescriptions;
