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
    GameEnd = 2,
    Help = 3,
    Highscores = 4,
    Interrupt = 5,
    JoinServer = 6,
    LoadGame = 7,
    Main = 8,
    Mods = 9,
    Multiplayer = 10,
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
