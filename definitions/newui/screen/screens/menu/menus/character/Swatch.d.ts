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
import { IColorDescription } from "entity/IHuman";
import ChoiceList, { Choice } from "newui/component/ChoiceList";
export declare class SwatchList<T extends number> extends ChoiceList {
    private readonly colors;
    constructor(colors: {
        [index: number]: IColorDescription | undefined;
    });
    select(selection: T, thro?: boolean): void;
    refreshChoices(): void;
}
export declare class Swatch extends Choice {
    color: IColorDescription;
    constructor(color: IColorDescription);
}
