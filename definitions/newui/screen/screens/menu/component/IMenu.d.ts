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
import { IComponent } from "newui/component/IComponent";
export declare enum MenuId {
    BACK = -1,
    NONE = 0,
    CharacterSelection = 1,
    Multiplayer = 2,
    GameEnd = 3,
    Help = 4,
    Highscores = 5,
    Interrupt = 6,
    JoinServer = 7,
    LoadGame = 8,
    Main = 9,
    Mods = 10,
    NewGame = 11,
    Options = 12,
    Pause = 13
}
export interface IMenu extends IComponent {
    canCancel: boolean | undefined;
    isSubmenu: boolean;
    selection: ISelectionHandler;
}
export interface ISelectionHandler {
    selectNext(sound?: boolean): void;
    selectPrevious(sound?: boolean): void;
    select(element: HTMLElement): void;
    getSelection(): HTMLElement;
}
