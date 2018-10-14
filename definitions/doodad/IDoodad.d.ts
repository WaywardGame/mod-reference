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
import { ICreature } from "creature/ICreature";
import DoodadInfo from "doodad/DoodadInfo";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { ActionType, DoodadType, DoodadTypeGroup, DoorOrientation, EquipType, GrowingStage, IDoodadParticles, IDoodadResource, IModdable, IObject, IObjectDescription, IObjectOptions, IRGB, ItemType, SkillType, StatusType, TerrainType } from "Enums";
import { IInspectable } from "game/inspection/Inspections";
import { IContainer, IItem, IItemArray, IItemLegendary } from "item/IItem";
import Translation from "language/Translation";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import { IVector3 } from "utilities/math/IVector";
export interface IDoodad extends IObject<DoodadType>, IDoodadOptions, IVector3, Partial<IContainer>, IInspectable {
    /**
     * @param article Whether to include an article for the name of the doodad. Uses the article rules on the language. Defaults to `true`.
     * @param count The number of this doodad that you're getting the name of. Defaults to `1`.
     *
     * Examples:
     * - `doodad.getName()` // "a stone furnace"
     * - `doodad.getName(false)` // "stone furnace"
     * - `doodad.getName(undefined, 3)` // "stone furnaces"
     */
    getName(article?: boolean, count?: number): Translation;
    description(): IDoodadDescription | undefined;
    changeType(doodadType: DoodadType): void;
    canGrow(): boolean;
    getGrowingStage(): GrowingStage | undefined;
    setGrowingStage(stage: GrowingStage, updateTile?: boolean): void;
    /**
     * Returns whether the doodad can be trampled
     */
    canTrample(): boolean | undefined;
    isValid(): boolean;
    getTile(): ITile;
    addTreasureChestLoot(): void;
    blocksMove(): boolean;
    /**
     * Can the doodad be gathered from in its current form?
     */
    canGather(): boolean;
    /**
     * Can the doodad be gathered from at all?
     */
    isGatherable(): boolean;
    isEmbers(): boolean;
    canHarvest(): boolean;
    canPickup(player: IPlayer): boolean;
    getPickupTypes(): ItemType[] | undefined;
    getActions(): ActionType[] | undefined;
    getDoodadInfo(): DoodadInfo | undefined;
    canCauseStatus(human: IBaseHumanEntity, equipType?: EquipType): boolean;
    causeStatus(human: IBaseHumanEntity, equipType?: EquipType): void;
    checkForTrampling(source: IBaseHumanEntity | ICreature): boolean;
    damage(forceBreak?: boolean, skipDropAsItem?: boolean, skipSound?: boolean, skipResources?: boolean): void;
    getDefaultDurability(): void;
    setOffTrap(human?: IBaseHumanEntity, withMessage?: boolean): void;
    getGrowthParticles(): IRGB | undefined;
    update(): void;
    isDangerous(player: IPlayer): boolean;
    getDamage(human: IBaseHumanEntity, equipType?: EquipType): number;
}
export interface IDoodadOptions extends IObjectOptions {
    gatherReady?: boolean;
    gfx?: number;
    spread?: number;
    treasure?: boolean;
    weight?: number;
    legendary?: IItemLegendary;
    disassembly?: IItemArray;
    ownerIdentifier?: string;
    item?: IItem;
    step?: number;
    well?: IWell;
}
export declare type IDoodadOld = Partial<IDoodad> & {
    growInto?: DoodadType;
};
export interface IGroupDescription {
    name: string;
    prefix?: string;
    suffix?: string;
}
export interface IDoodadDoor extends IDoodad {
    orientation: DoorOrientation;
}
export interface IDoodadDescription extends IObjectDescription, IModdable {
    allowedTiles?: TerrainType[];
    blockDig?: boolean;
    blockJump?: boolean;
    blockLos?: boolean;
    blockMove?: boolean;
    canBreak?: boolean;
    canGrow?: boolean;
    canGrowInCaves?: boolean;
    canStoke?: boolean;
    canTrampleWhenMature?: boolean;
    causesStatus?: StatusType[];
    damage?: number;
    disableDrop?: boolean;
    gather?: IDoodadResource;
    graphicVariation?: boolean;
    group?: DoodadTypeGroup;
    harvest?: IDoodadResource;
    isAnimated?: boolean;
    isFlammable?: boolean;
    isLocked?: boolean;
    repairItem?: ItemType;
    isTall?: boolean;
    isTrap?: boolean;
    isWaterSource?: boolean;
    lit?: DoodadType;
    burnsLike?: ItemType[];
    particles?: IRGB;
    growthParticles?: IDoodadParticles;
    pickUp?: ItemType[];
    gatherCanHurtHands?: boolean;
    providesFire?: boolean;
    providesLight?: number;
    reduceDurabilityOnGather?: boolean;
    revert?: DoodadType;
    spawnOnTerrain?: TerrainType[];
    spreadMax?: number;
    trapDamage?: number;
    waterStill?: boolean;
    gatherSkillUse?: SkillType;
    growthCycle?: boolean;
    isTree?: boolean;
    isWall?: boolean;
    isFungi?: boolean;
    isDoor?: boolean;
    isClosedDoor?: boolean;
    isGate?: boolean;
    isFence?: boolean;
    isUnlitTorch?: boolean;
    isLitTorch?: boolean;
}
export interface IWell {
    quantity: number;
    waterType: WaterType;
}
export declare enum WaterType {
    None = 0,
    FreshWater = 1,
    SaltWater = 2
}
