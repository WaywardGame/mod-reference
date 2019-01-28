/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IModdable } from "Enums";
import { IVector2 } from "utilities/math/IVector";
export declare enum DialogId {
    Messages = 0,
    Notes = 1,
    MessagesEditFilters = 2,
    QuickSettings = 3,
    Milestones = 4,
    Skills = 5,
    Book = 6,
    Map = 7,
    Quests = 8
}
export declare enum Edge {
    Top = 0,
    Right = 1,
    Bottom = 2,
    Left = 3
}
export declare type IEdges = [[Edge.Left | Edge.Right, number], [Edge.Top | Edge.Bottom, number]];
export interface IDialogDescription extends IModdable {
    minSize: IVector2;
    size: IVector2;
    maxSize: IVector2;
    edges: IEdges;
    /**
     * Whether to save if the dialog is open. If this is false, the dialog will always be closed when a game loads. Defaults to true.
     */
    saveOpen?: boolean;
    /**
     * Whether resizing the dialog will keep it a square. Defaults to false.
     */
    square?: boolean;
}
declare const dialogDescriptions: Descriptions<DialogId, IDialogDescription>;
export default dialogDescriptions;
