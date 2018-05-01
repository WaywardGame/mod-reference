import { IComponent } from "newui/element/IComponent";
export declare enum MenuId {
    BACK = -1,
    NONE = 0,
    About = 1,
    Changelog = 2,
    CharacterCreation = 3,
    CharacterSelection = 4,
    Friends = 5,
    GameEnd = 6,
    Highscores = 7,
    Interrupt = 8,
    JoinDedicatedServer = 9,
    LoadGame = 10,
    Main = 11,
    Mods = 12,
    Multiplayer = 13,
    NewGame = 14,
    News = 15,
    Options = 16,
    Pause = 17,
}
export interface IMenu extends IComponent {
    selectNext(sound?: boolean): void;
    selectPrevious(sound?: boolean): void;
    select(element: HTMLElement): void;
    getSelection(): HTMLElement;
}
