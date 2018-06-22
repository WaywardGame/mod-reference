import DoodadInfo from "doodad/DoodadInfo";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { ActionType, DoodadType, DoodadTypeGroup, DoorOrientation, EquipType, GrowingStage, IDoodadParticles, IDoodadResource, IInspect, IModdable, IObject, IObjectDescription, IObjectOptions, IRGB, ItemType, SentenceCaseStyle, SkillType, StatusType, TerrainType } from "Enums";
import { IContainer, IItem, IItemArray, IItemLegendary } from "item/IItem";
import { Message } from "language/IMessages";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import { IVector3 } from "utilities/math/IVector";
export interface IDoodad extends IObject<DoodadType>, IDoodadOptions, IVector3, Partial<IContainer> {
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
    causeStatus(human: IBaseHumanEntity, equipType?: EquipType): void;
    checkForTrampling(humanOrCreatureId: IBaseHumanEntity | number): boolean;
    damage(forceBreak?: boolean, isTrample?: boolean, skipSound?: boolean, skipResources?: boolean): void;
    getDefaultDurability(): void;
    getDurabilityMessage(): Message;
    getGrowingMessage(textCase: SentenceCaseStyle): string;
    getInspect(): IInspect[];
    setOffTrap(human?: IBaseHumanEntity, withMessage?: boolean): void;
    update(): void;
    isDangerous(): boolean;
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
    onBurn?: ItemType;
    particles?: IRGB;
    growthParticles?: IDoodadParticles;
    pickUp?: ItemType[];
    pickUpCanHurtHands?: boolean;
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
