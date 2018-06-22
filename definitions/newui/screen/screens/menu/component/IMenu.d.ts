import { IComponent } from "newui/component/IComponent";
export declare enum MenuId {
    BACK = -1,
    NONE = 0,
    CharacterSelection = 1,
    Friends = 2,
    GameEnd = 3,
    Help = 4,
    Highscores = 5,
    Interrupt = 6,
    JoinDedicatedServer = 7,
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
