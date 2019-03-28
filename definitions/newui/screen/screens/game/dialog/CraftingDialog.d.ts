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
import Player from "entity/player/Player";
import { IContainer, IItem } from "item/IItem";
import UiTranslation from "language/dictionary/UiTranslation";
import Dialog from "newui/screen/screens/game/component/Dialog";
export default class CraftingDialog extends Dialog {
    private readonly craftableRecipes;
    private craftableInventories;
    constructor();
    getName(): UiTranslation;
    protected updateCraftableInventories(): void;
    protected onAddItemToInventory(player: Player, item: IItem, container: IContainer): void;
    protected onRemoveItemFromInventory(player: Player, item: IItem, container: IContainer): void;
    private getInventories;
}
