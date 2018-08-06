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
import { BlockRow } from "newui/component/BlockRow";
import { Heading } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
export declare class LabelledRow extends BlockRow {
    private readonly label;
    constructor(uiApi: UiApi);
    setLabel(labelInitializer: (label: Heading) => Heading): this;
    /**
     * Safe — removes all children except for the label
     */
    dump(): this;
}
