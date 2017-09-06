import { ICreature } from "creature/ICreature";
import { ActionType, CreatureType, DamageType, Defense, DoodadType, DoodadTypeGroup, EquipType, IItemTypeGroup, IModdable, IObject, IObjectDescription, IObjectOptions, IPointZ, ItemQuality, ItemType, ItemTypeGroup, RecipeLevel, SkillType, TatteredMap } from "Enums";
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
export interface IItem extends IObject<ItemType>, IObjectOptions, IContainable, Partial<IContainer> {
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
    changeInto(itemType: ItemType, disableNotify?: boolean): void;
    returns(): void;
    spawnOnBreak(): ICreature | undefined;
    spawnOnDecay(): ICreature | undefined;
    spawnCreatureOnItem(creatureType: CreatureType | undefined): ICreature | undefined;
    getLocation(): IPointZ | undefined;
    dropInWater(player: IPlayer, x?: number, y?: number): void;
    dropInLava(player: IPlayer, x?: number, y?: number): void;
    placeOnTile(x: number, y: number, z: number, force: boolean, skipMessage?: boolean): void;
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
export interface IItemDescription extends IObjectDescription, IModdable {
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
    requiredForDisassembly?: [ItemType | ItemTypeGroup];
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
export interface IBaseContainerReference {
    type: ContainerReferenceType;
}
export interface IInventoryContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.Inventory;
    pid: number;
    identifier?: string;
}
export interface IInvalidContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.Invalid;
}
export interface IWorldContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.World;
}
export interface ITileContainerReference extends IBaseContainerReference, IPointZ {
    type: ContainerReferenceType.Tile;
}
export interface IDoodadContainerReference extends IBaseContainerReference, IPointZ {
    type: ContainerReferenceType.Doodad;
}
export interface IItemContainerReference extends IBaseContainerReference {
    type: ContainerReferenceType.Item;
    id: number;
}
export declare type ContainerReference = IInvalidContainerReference | IWorldContainerReference | IInventoryContainerReference | ITileContainerReference | IDoodadContainerReference | IItemContainerReference;
export declare enum CraftResult {
    Fail = 0,
    Success = 1,
    CritSuccess = 2,
}
