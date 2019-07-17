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
import { IContainer } from "item/IItem";
import Item from "item/Item";
import UiTranslation from "language/dictionary/UiTranslation";
import Dialog from "newui/screen/screens/game/component/Dialog";
export default class CraftingDialog extends Dialog {
    private readonly craftableRecipes;
    private accessible;
    private readonly sort;
    private readonly craftableWrapper;
    constructor();
    getName(): UiTranslation;
    protected updateCraftableInventories(): void;
    protected onContainerItemAdd(_: any, item: Item, container: IContainer): void;
    protected onInventoryItemAdd(_: any, item: Item): void;
    protected onContainerItemRemove(_: any, item: Item, previousContainer: IContainer): void;
    protected onInventoryItemRemove(_: any, item: Item): void;
    private addItem;
    private addCraftable;
    private removeItem;
}
