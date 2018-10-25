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
import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class CustomGameOptionsTab extends Tab {
    readonly refreshables: IRefreshable[];
    constructor(api: UiApi, id: CustomGameOptionsSection);
    protected addRefreshables(...refreshables: IRefreshable[]): this;
}
export declare enum CustomGameOptionsSection {
    General = 0,
    Stats = 1,
    Reputation = 2,
    Inventory = 3,
    Skills = 4,
    Creatures = 5
}
