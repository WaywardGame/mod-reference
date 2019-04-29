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
import { IDoodad } from "doodad/IDoodad";
import IEntity from "entity/IEntity";
import EventEmitter from "event/EventEmitter";
import { IItem } from "item/IItem";
import { ITile } from "tile/ITerrain";
import Stream from "utilities/stream/Stream";
export declare enum RecipeRequirementType {
    Item = 0,
    Tool = 1,
    Doodad = 2,
    Fire = 3
}
export interface IUseItemStrategy {
    items: IItem[];
    freeUsedItem?(api: ICrafter, item: IItem): boolean;
}
export declare const enum QualityBonus {
    ConsumedItems = 0,
    UsedItems = 1,
    Doodads = 2
}
export declare const MAX_QUALITY_BONUSES: Readonly<Descriptions<QualityBonus, number>>;
interface ICrafterEvents {
    craft(items: IItem[]): any;
}
export interface ICrafter extends EventEmitter.Host<ICrafterEvents> {
    /**
     * Gets a stream of the tiles around the crafter entity.
     * @param includeCrafterTile Whether the tile the crafter is on should be included. Defaults to `true`.
     */
    tilesAroundCrafter(includeCrafterTile?: boolean): Stream<ITile>;
    getCrafter(): IEntity;
    getUsableItems(): Set<IItem>;
    getUsedItems(): Stream<IItem>;
    freeUsedItem(item: IItem): boolean;
    useItems(useItemStrategy: IUseItemStrategy): void;
    getQualityBonus(): number;
    addQualityBonus(type: QualityBonus, bonus: number): this;
    setQualityBonus(type: QualityBonus, bonus: number): this;
    getUsableDoodads(): Set<IDoodad>;
    getUsedDoodads(): Set<IDoodad>;
    useDoodads(...doodads: IDoodad[]): this;
}
export default abstract class RecipeRequirement {
    readonly type: RecipeRequirementType;
    constructor(type: RecipeRequirementType);
    abstract isMet(api: ICrafter): boolean;
}
export {};
