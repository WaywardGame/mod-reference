import { ActionType, CreatureType, DamageType, Defense, DoodadType, DoodadTypeGroup, EquipType, IItemTypeGroup, IPointZ, ItemQuality, ItemType, ItemTypeGroup, RecipeLevel, SkillType, TatteredMap } from "Enums";
import IPlayer from "player/IPlayer";
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
    skill: SkillType;
    value: number;
}
export interface IItem extends IObject, IContainable, Partial<IContainer> {
    readonly id: number;
    readonly type: ItemType;
    weight: number;
    equippedPid?: number;
    quickSlot?: number;
    tatteredMap?: TatteredMap;
    legendary?: IItemLegendary;
    disassembly?: IItemArray;
    order?: number;
    description(): IItemDescription | undefined;
    getDecayMax(): number;
    getTotalWeight(): number;
    getDisassemblyWeight(): number;
    verifyAndFixItem(): void;
    damage(modifier?: number): void;
    isDamaged(): boolean;
    isDecayed(): boolean;
    isEquipped(): boolean;
    getEquipSlot(): EquipType | undefined;
    changeInto(itemType: ItemType): void;
    returns(): void;
    spawnOnBreak(): number | undefined;
    spawnOnDecay(): number | undefined;
    spawnCreatureOnItem(creatureType: CreatureType | undefined): number | undefined;
    getLocation(): IPointZ | undefined;
    dropInWater(player: IPlayer, x?: number, y?: number): void;
    dropInLava(player: IPlayer, x?: number, y?: number): void;
    placeOnTile(x: number, y: number, z: number, force: boolean): void;
    initializeMap(): void;
    setQuality(quality?: ItemQuality): void;
    acquireNotify(player: IPlayer): void;
}
export interface IItemOld {
    equipped?: EquipType;
}
export interface IContainable {
    containedWithin?: IContainer;
}
export interface IContainer extends IContainable {
    weightCapacity: number;
    containedItems: IItemArray;
    itemOrders?: number[];
}
export interface IObject {
    type: number;
    decay?: number;
    minDur?: number;
    maxDur?: number;
    quality?: ItemQuality;
    renamed?: string;
}
export interface IObjectDescription {
    name?: string;
    description?: string;
    suffix?: string;
    prefix?: string;
    decayMax?: number;
    skillUse?: SkillType;
    weightCapacity?: number;
    imagePath?: string;
}
export interface IItemDescription extends IObjectDescription {
    durability?: number;
    doodadType?: DoodadType;
    onBurn?: ItemType;
    onUse?: {
        [index: number]: any;
    };
    onEquip?: (item: IItem) => void;
    onUnequip?: (item: IItem) => void;
    onEquipEffect?: any[];
    damageType?: DamageType;
    group?: ItemTypeGroup[];
    torch?: any;
    weight?: number;
    reducedWeight?: number;
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
    requiredForDisassembly?: [ItemType | ItemTypeGroup];
    mod?: number;
    decaysInto?: ItemType;
    twoHanded?: boolean;
    recipes?: ItemType[];
    keepDurabilityOnCraft?: boolean;
    craftable?: boolean;
    dismantle?: IDismantleDescription;
    doodadContainer?: DoodadType;
    repairable?: boolean;
    suffix?: string;
    prefix?: string;
    spawnOnDecay?: CreatureType;
    spawnOnBreak?: CreatureType;
    showOverHair?: boolean;
    hasSleepImage?: boolean;
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
export interface IActionDescription {
    name?: string;
    description?: string;
}
export declare enum ContainerReferenceType {
    Invalid = 0,
    Inventory = 1,
    Doodad = 2,
    World = 3,
    Tile = 4,
    Item = 5,
}
export interface IInventoryContainerReference extends IContainerReference {
    pid: number;
    identifier?: string;
}
export declare type IWorldContainerReference = IContainerReference;
export declare type ITileContainerReference = IContainerReference & IPointZ;
export declare type IDoodadContainerReference = IContainerReference & IPointZ;
export interface IItemContainerReference extends IContainerReference {
    id: number;
}
export interface IContainerReference {
    type: ContainerReferenceType;
}
export declare enum CraftResult {
    Fail = 0,
    Success = 1,
    CritSuccess = 2,
}
