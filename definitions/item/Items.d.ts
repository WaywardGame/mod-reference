import { IItemTypeGroup, ItemType, ItemTypeGroup } from "Enums";
import { IActionDescription, IGroupDescription, IItemDescription, IRecipeComponent } from "IItem";
export declare const itemDescriptions: Description<IItemDescription>;
export default itemDescriptions;
export declare const itemGroups: Description<IGroupDescription>;
export declare const itemActionDescriptions: Description<IActionDescription>;
export declare function RecipeComponent(type: (ItemType | ItemTypeGroup), requiredAmount: number, consumedAmount: number, disassembleAmount?: number, ignoreWeight?: boolean): IRecipeComponent;
export declare function ExtendItem(typeOrItemDescription: ItemType | Partial<Description<IItemDescription>>, extendWith: Partial<Description<IItemDescription>>): Description<IItemDescription>;
export declare function isItemTypeGroup(itemType: ItemType | ItemTypeGroup | IItemTypeGroup): itemType is ItemTypeGroup;
export declare function isCustomItemTypeGroup(itemType: ItemType | ItemTypeGroup | IItemTypeGroup): itemType is IItemTypeGroup;
export declare function isItemTypeInGroup(itemType: ItemType, itemGroupSearch: ItemTypeGroup | IItemTypeGroup): boolean;
