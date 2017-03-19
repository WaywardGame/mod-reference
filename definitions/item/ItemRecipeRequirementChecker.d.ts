import { IContainer, IItem, IItemArray, IRecipe } from "item/IItem";
import IPlayer from "player/IPlayer";
export default class ItemRecipeRequirementChecker {
    private player;
    private recipe;
    private trackItems;
    itemBaseComponent: IItem;
    itemComponentsRequired: IItemArray;
    itemComponentsConsumed: IItemArray;
    itemComponentsToBeSalvaged: IItemArray;
    numComponentsNeeded: number;
    private baseComponent;
    private components;
    constructor(player: IPlayer, recipe: IRecipe, trackItems: boolean);
    amountNeededForComponent(componentIndex: number): number;
    requirementsMet(): boolean;
    /**
     * Looks inside the container and its subcontainers.
     * @param container
     * @returns true if the recipe's requirements are satisfied by items in the container.
     */
    process(container: IContainer): boolean;
    isDiscovered(): boolean;
    private processItem(item);
}
