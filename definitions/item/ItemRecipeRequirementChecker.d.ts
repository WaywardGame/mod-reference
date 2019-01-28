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
import { IContainer, IItem, IItemArray, IRecipe } from "item/IItem";
import IPlayer from "player/IPlayer";
export default class ItemRecipeRequirementChecker {
    private readonly player;
    private readonly recipe?;
    private readonly trackItems?;
    private readonly cacheItems?;
    itemBaseComponent: IItem | undefined;
    itemComponentsRequired: IItemArray;
    itemComponentsConsumed: IItemArray;
    itemComponentsCanBurn: boolean;
    numComponentsNeeded: number;
    private baseComponent;
    private components;
    private adjacentContainers;
    private readonly itemsToProcess;
    constructor(player: IPlayer, recipe?: IRecipe | undefined, trackItems?: boolean | undefined, cacheItems?: boolean | undefined);
    amountNeededForComponent(componentIndex: number): number;
    requirementsMet(): boolean;
    setAdjacentContainers(adjacentContainers: IContainer[] | undefined): void;
    isDiscovered(): boolean;
    /**
     * Looks inside the players inventory and around adjacent opened doodads
     * @returns true if the recipe's requirements are satisfied
     */
    process(allowProtectedCraftingItems?: boolean): boolean;
    setRecipe(recipe: IRecipe): void;
    /**
     * Looks around adjacent containers
     * @returns true if the recipe's requirements are satisfied
     */
    processAdjacent(allowProtectedCraftingItems?: boolean): boolean;
    /**
     * Looks inside the container and its subcontainers.
     * @param container The container
     * @returns true if the recipe's requirements are satisfied by items in the container.
     */
    processContainer(container: IContainer, allowProtectedCraftingItems?: boolean): boolean;
    private processItem;
}
