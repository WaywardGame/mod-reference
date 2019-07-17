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
import ItemComponent from "newui/screen/screens/game/component/Item";
import { Craftable, RecipeSort } from "newui/screen/screens/game/dialog/crafting/RecipeCache";
export default class RecipeButton extends ItemComponent {
    readonly craftable: Craftable;
    private readonly sorts;
    constructor(craftable: Craftable);
    getSortOrder(sort: RecipeSort): number;
}
