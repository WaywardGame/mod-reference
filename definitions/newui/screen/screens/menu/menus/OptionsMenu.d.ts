import { Paragraph, TextOptions } from "newui/element/Text";
import UiElement from "newui/element/UiElement";
import { UiApi } from "newui/INewUi";
import Menu, { ITabSection, MenuTabOptions } from "newui/screen/screens/menu/element/Menu";
export declare enum OptionsTab {
    General = 0,
    Audio = 1,
    Video = 2,
    Gameplay = 3,
    Mods = 4,
    Controls = 5,
    SaveData = 6,
    Developer = 7,
}
export default class OptionsMenu extends Menu {
    private static readonly modOptions;
    static registerModOptions(modIndex: number, creationHandler: (uiApi: UiApi, uiElement: ModOptions) => any): void;
    static deleteModOptions(modIndex: number): void;
    static modHasOptions(modIndex: number): boolean;
    private readonly bindSections;
    private controlsSection;
    private bindCatcher;
    private modOptions;
    private readonly refreshables;
    private initialized;
    constructor(uiApi: UiApi);
    init(): Promise<void>;
    remove(): Promise<void>;
    addTabSection(tab: MenuTabOptions, heading: TextOptions, content?: IterableOf<UiElement | undefined>): ITabSection;
    private registerRefresh(element);
    private refresh(init?);
}
export declare class ModOptions extends Paragraph {
    constructor(uiApi: UiApi);
}
