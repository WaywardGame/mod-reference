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
import ChoiceList, { Choice } from "newui/component/ChoiceList";
import { UiApi } from "newui/INewUi";
import { IColorDescription } from "player/IPlayer";
export declare class SwatchList<T extends number> extends ChoiceList {
    private readonly colors;
    constructor(api: UiApi, colors: {
        [index: number]: IColorDescription | undefined;
    });
    select(selection: T, thro?: boolean): void;
    refreshChoices(): void;
}
export declare class Swatch extends Choice {
    color: IColorDescription;
    constructor(api: UiApi, color: IColorDescription);
}
