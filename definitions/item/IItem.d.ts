import { ICreature } from "creature/ICreature";
import { IDoodadDescription } from "doodad/IDoodad";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { EntityType } from "entity/IEntity";
import { ActionType, BookType, CreatureType, DamageType, Defense, DoodadType, DoodadTypeGroup, EquipType, IItemTypeGroup, IModdable, IObject, IObjectDescription, IObjectOptions, ItemQuality, ItemType, ItemTypeGroup, LegendaryType, RecipeLevel, SkillType, StatType, TatteredMap } from "Enums";
import IPlayer from "player/IPlayer";
import { IVector3 } from "utilities/math/IVector";
export interface IRecipe {
    baseComponent?: (ItemType | ItemTypeGroup);
    components: IRecipeComponent[];
    skill: SkillType;
    level: RecipeLevel;
    requiredDoodad?: DoodadType | DoodadTypeGroup;
    requiresFire?: boolean;
    reputation: number;
}
export interface IRecipeComponent {
    type: ItemType | ItemTypeGroup | IItemTypeGroup;
    requiredAmount: number;
    consumedAmount: number;
    disassembleAmount: number;
    ignoreWeight: boolean;
}
export interface IDismantleComponent {
    [index: number]: number;
}
export interface IRanged {
    range: number;
    attack: number;
}
export declare type IItemArray = IItem[];
export interface IItemLegendary {
    type: LegendaryType;
    value: number;
    skill?: SkillType;
    stat?: StatType;
}
export interface IItem extends IObject<ItemType>, IObjectOptions, IContainable, Partial<IContainer> {
    weight: number;
    equippedId?: number;
    equippedType?: EntityType;
    readonly quickSlot?: number;
    tatteredMap?: TatteredMap;
    legendary?: IItemLegendary;
    book?: BookType;
    disassembly?: IItemArray;
    order?: number;
    ownerIdentifier?: string;
    description(): IItemDescription | undefined;
    isValid(): boolean;
    shouldBeProtected(): boolean;
    getDecayMax(): number;
    getTotalWeight(): number;
    getDisassemblyWeight(): number;
    verifyAndFixItem(): void;
    damage(source: string, modifier?: number): void;
    isDamaged(): boolean;
    isDecayed(): boolean;
    isEquipped(): boolean;
    isInTradeContainer(): boolean;
    getEquipSlot(): EquipType | undefined;
    setQuickSlot(player: IPlayer, quickSlot: number | undefined): void;
    clearQuickSlot(): void;
    changeInto(itemType: ItemType, disableNotify?: boolean): void;
    returns(): boolean;
    spawnOnBreak(): ICreature | undefined;
    spawnOnDecay(): ICreature | undefined;
    spawnCreatureOnItem(creatureType: CreatureType | undefined, forceAberrant?: boolean): ICreature | undefined;
    getLocation(): IVector3 | undefined;
    dropInWater(human: IBaseHumanEntity, x?: number, y?: number): void;
    dropInLava(human: IBaseHumanEntity, x?: number, y?: number): void;
    placeOnTile(x: number, y: number, z: number, force: boolean, skipMessage?: boolean): boolean;
    initializeMap(): void;
    setQuality(quality?: ItemQuality): void;
    acquireNotify(player: IPlayer): void;
    getStokeFireValue(): number | undefined;
    getOnUseBonus(): number;
    getWorth(legendaryWorth?: boolean): number | undefined;
    canBurnPlayer(): boolean;
}
export interface IItemOld {
    equipped?: EquipType;
    equippedPid?: number;
}
export interface IItemLegendaryOld {
    legendary?: {
        skill: SkillType;
    };
}
export interface IContainable {
    containedWithin?: IContainer;
}
export interface IContainer extends IContainable {
    weightCapacity: number;
    containedItems: IItemArray;
    itemOrders?: number[];
    containerType?: ContainerType;
}
export interface IItemDescription extends IObjectDescription, IModdable {
    durability?: number;
    doodad?: IDoodadDescription;
    doodadType?: DoodadType;
    onBurn?: ItemType;
    onUse?: {
        [index: number]: any;
    };
    onEquipEffect?: any[];
    damageType?: DamageType;
    group?: ItemTypeGroup[];
    weight?: number;
    reducedWeight?: number;
    minimumWeight?: number;
    lit?: ItemType;
    damageModifier?: number;
    isTorch?: boolean;
    equip?: EquipType;
    returnOnUse?: [ItemType, boolean];
    inheritWeight?: ItemType;
    attack?: number;
    defense?: Defense;
    revert?: ItemType;
    use?: ActionType[];
    ranged?: IRanged;
    recipe?: IRecipe;
    disassemble?: boolean;
    requiredForDisassembly?: Array<ItemType | ItemTypeGroup>;
    decaysInto?: ItemType;
    twoHanded?: boolean;
    recipes?: ItemType[];
    keepDurabilityOnCraft?: boolean;
    craftable?: boolean;
    dismantle?: IDismantleDescription;
    doodadContainer?: DoodadType;
    repairable?: boolean;
    repairAndDisassemblyRequiresFire?: boolean;
    suffix?: string;
    prefix?: string;
    spawnOnDecay?: CreatureType;
    spawnOnBreak?: CreatureType;
    showOverHair?: boolean;
    hasSleepImage?: boolean;
    flammable?: boolean;
    plural?: string;
    hideHelmet?: boolean;
    worth?: number;
    onEquip?(item: IItem): void;
    onUnequip?(item: IItem): void;
}
export interface IDismantleDescription {
    items: Array<[ItemType, number]>;
    required?: ItemTypeGroup;
    skill?: SkillType;
    reputation?: number;
}
export interface IGroupDescription {
    name: string;
    types: ItemType[];
    suffix?: string;
    prefix?: string;
}
export declare enum ContainerReferenceType {
    Invalid = 0,
    PlayerInventory = 1,
    Doodad = 2,
    World = 3,
    Tile = 4,
    Item = 5,
    NPCInventory = 6
}
export interface IBaseContainerReference {
    type: ContainerReferenceType;
}
export interface IPlayerInventoryContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.PlayerInventory;
    pid: number;
    identifier?: string;
}
export interface IInvalidContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.Invalid;
}
export interface IWorldContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.World;
}
export interface ITileContainerReference extends IBaseContainerReference, IVector3 {
    type: ContainerReferenceType.Tile;
}
export interface IDoodadContainerReference extends IBaseContainerReference, IVector3 {
    type: ContainerReferenceType.Doodad;
}
export interface IItemContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.Item;
    id: number;
}
export interface INPCInventoryContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.NPCInventory;
    id: number;
}
export declare type ContainerReference = IInvalidContainerReference | IWorldContainerReference | IPlayerInventoryContainerReference | ITileContainerReference | IDoodadContainerReference | IItemContainerReference | INPCInventoryContainerReference;
export declare enum CraftResult {
    Fail = 0,
    Success = 1,
    CritSuccess = 2
}
export declare enum ContainerType {
    Default = 0,
    Trade = 1
}
