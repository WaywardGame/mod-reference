import { DoodadType, DoodadTypeGroup, DoorOrientation, GrowingStage, IDoodadParticles, IDoodadResource, IInspect, IModdable, IObject, IObjectDescription, IObjectOptions, IPointZ, IRGB, ItemType, SentenceCaseStyle, SkillType, StatusType, TerrainType } from "Enums";
import { IContainer, IItemArray, IItemLegendary } from "item/IItem";
import { Message } from "language/Messages";
import { IPlayer } from "player/IPlayer";
export interface IDoodad extends IObject<DoodadType>, IDoodadOptions, IPointZ, Partial<IContainer> {
    description(): IDoodadDescription | undefined;
    changeType(doodadType: DoodadType): void;
    canGrow(): boolean;
    getGrowingStage(): GrowingStage | undefined;
    setGrowingStage(stage: GrowingStage, updateTile?: boolean): void;
    addTreasureChestLoot(): void;
    blocksMove(): boolean;
    canGather(player: IPlayer): boolean;
    isGatherable(player: IPlayer): boolean;
    canHarvest(player: IPlayer): boolean;
    canPickup(player: IPlayer): boolean;
    causeStatus(player: IPlayer): void;
    checkForTrampling(playerOrCreatureId: IPlayer | number): boolean;
    damage(forceBreak?: boolean): void;
    getDefaultDurability(): void;
    getDurabilityMessage(): Message;
    getGrowingMessage(textCase: SentenceCaseStyle): string;
    getInspect(): IInspect[];
    setOffTrap(player?: IPlayer, withMessage?: boolean): void;
    update(): void;
}
export interface IDoodadOptions extends IObjectOptions {
    gatherReady?: boolean;
    gfx?: number;
    spread?: number;
    torch?: IDoodadTorchType;
    treasure?: boolean;
    weight?: number;
    legendary?: IItemLegendary;
    disassembly?: IItemArray;
}
export interface IDoodadTorchType {
    type: ItemType;
    decay?: number;
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
    canTrample?: boolean;
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
    isRepairable?: boolean;
    isTall?: boolean;
    isTrap?: boolean;
    isWaterSource?: boolean;
    lit?: DoodadType;
    onBurn?: ItemType;
    particles: IRGB;
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
}
