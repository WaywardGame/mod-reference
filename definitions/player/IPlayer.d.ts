import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { Delay, EquipType, FacingDirection, HairColor, Hairstyle, IInputMovement, IInspect, IModdable, IPoint, IPointZ, IRGB, ItemQuality, ItemType, KeyBind, MoveType, PlayerState, RestCancelReason, RestType, SfxType, SkillType, SkinColor, StatType, TurnType, WeightStatus } from "Enums";
import IOptions from "game/IOptions";
import { IContainer, IItem } from "item/IItem";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import PlayerDefense from "player/PlayerDefense";
import { ISkillSet } from "player/Skills";
import { IPropSerializable } from "save/ISerializer";
import { ITile } from "tile/ITerrain";
import { HintType } from "ui/IHint";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
export interface IPlayer extends IPropSerializable, IPointZ {
    attack: number;
    attackFromEquip: IAttackHand;
    benignity: number;
    containerSortInfo: {
        [index: string]: IContainerSortInfo;
    };
    currentHint: HintType;
    customization: IPlayerCustomization;
    deathBy: string;
    defense: PlayerDefense;
    defenses: number[];
    dehydration: number;
    dexterity: number;
    dialogContainerInfo: IDialogInfo[];
    dialogInfo: {
        [index: string]: IDialogInfo;
    };
    direction: IPoint;
    equipped: {
        [index: number]: number;
    };
    facingDirection: FacingDirection;
    fromX: number;
    fromY: number;
    handToUse: EquipType;
    hintSeen: boolean[];
    id: number;
    identifier: string;
    inventory: IContainer;
    isMoving: boolean;
    isMovingClientside: boolean;
    lightBonus: number;
    malignity: number;
    movementAnimation: number;
    movementComplete: boolean;
    movementCompleteZ: number | undefined;
    movementFinishTime: number;
    movementProgress: number;
    moveType: MoveType;
    name: string;
    nextMoveDirection: FacingDirection | undefined;
    nextMoveTime: number;
    nextX: number;
    nextY: number;
    noInputReceived: boolean;
    options: IOptions;
    quickSlotInfo: IQuickSlotInfo[];
    raft: number | undefined;
    restData: IRestData | undefined;
    revealedItems: {
        [index: number]: boolean;
    };
    score: number;
    skills: ISkillSet;
    spawnPoint: IPointZ | undefined;
    starvation: number;
    state: PlayerState;
    stats: IStats;
    status: IPlayerStatus;
    stopNextMovement: boolean;
    strength: number;
    swimming: boolean;
    tamedCreatures: number[];
    turns: number;
    walkSoundCounter: number;
    wasAbsentPlayer: boolean;
    weight: number;
    x: number;
    y: number;
    z: number;
    weightBonus: number;
    travelData: IPlayerTravelData;
    addDelay(delay: Delay, replace?: boolean): void;
    addMilestone(milestone: MilestoneType, data?: number): void;
    attributes(): void;
    burn(skipMessage?: boolean, skipParry?: boolean): number | undefined;
    calculateEquipmentStats(): void;
    canCarve(): IItem | undefined;
    cancelResting(reason: RestCancelReason): void;
    canJump(): boolean;
    canRelease(creature: ICreature): boolean;
    canSeeTile(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    checkAndRemoveBlood(): boolean;
    checkForGather(): IDoodad | undefined;
    checkForGatherFire(): string | undefined;
    checkForStill(): boolean;
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    checkReputationMilestones(): void;
    checkSkillMilestones(): void;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    checkWeight(): void;
    getWeightStatus(): WeightStatus;
    getWeightMovementPenalty(): number;
    createItemInInventory(itemType: ItemType, quality?: ItemQuality): IItem;
    damage(amount: number, damageMessage: string, soundDelay?: number): void;
    damageEquipment(): void;
    equip(item: IItem, slot: EquipType, internal?: boolean, switchingHands?: boolean): void;
    getBindDownTime(key: KeyBind): number | undefined;
    getConsumeBonus(skillUse: SkillType, item: IItem | undefined): number;
    getEquippedItem(slot: EquipType): IItem | undefined;
    getEquippedItems(): IItem[];
    getEquipSlotForItem(item: IItem): EquipType | undefined;
    getHandToUse(): EquipType | undefined;
    getMaxHealth(): number;
    getMouseDirection(): FacingDirection;
    getReputation(): number;
    getSerializationProperties(_: string): string[];
    getTouchDirection(): FacingDirection | undefined;
    hasDelay(): boolean;
    hurtHands(message: Message, damageMessage: Message): void;
    inspect(x: number, y: number, z?: number): void;
    inspectTile(tile: ITile): IInspect[];
    isBindDown(key: KeyBind): boolean;
    isGhost(): boolean;
    isLocalPlayer(): boolean;
    isResting(): boolean;
    isRestingCancelled(): boolean;
    passTurn(turnType?: TurnType): void;
    processInput(): void;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    queueSoundEffectInFront(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    resetKeyBindState(): void;
    resetMovementStates(): void;
    revealItem(itemType: ItemType): void;
    getMovementFinishTime(): number;
    setId(id: number): void;
    setMouseDirection(playerDirection: FacingDirection): void;
    setRaft(itemId: number | undefined): void;
    setTouchDirection(playerDirection: FacingDirection | undefined): void;
    setup(completedMilestones: number): void;
    setZ(z: number): void;
    shakeStat(statType: StatType): void;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    staminaCheck(): boolean;
    staminaReduction(skillType: SkillType): void;
    startResting(restData: IRestData): void;
    tick(isPassTurn?: boolean): void;
    unequip(item: IItem, internal?: boolean, skipMessage?: boolean, switchingHands?: boolean): void;
    unequipAll(): void;
    updateCraftTable(updateDismantleItems: boolean): void;
    updateCraftTableAndWeight(): void;
    updateDialogInfo(dialogIndex: string | number): void;
    getDialogInfo(dialogIndex: string | number): IDialogInfo;
    updateKeyBindState(key: KeyBind, state: number | undefined): void;
    updateQuickSlotInfo(quickSlot: number, itemType?: ItemType, action?: IContextMenuAction): void;
    updateReputation(reputation: number): void;
    updateStatsAndAttributes(): void;
    updateMilestones(): void;
}
export default IPlayer;
export interface IPlayerStatus {
    bleeding: boolean;
    burned: boolean;
    poisoned: boolean;
}
export interface IHairstyleDescription extends IModdable {
    name: string;
    imagePath?: string;
}
export interface IColorDescription extends IModdable {
    color: IRGB;
}
export interface IPlayerCustomization {
    hairStyle: Hairstyle;
    hairColor: HairColor;
    skinColor: SkinColor;
}
export interface IAttackHand {
    leftHand: number;
    rightHand: number;
}
export interface IStats {
    health: IStat;
    stamina: IStat;
    hunger: IStat;
    thirst: IStat;
}
export interface IStat {
    value: number;
    timer: number;
    regen: number;
    regenBase: number;
}
export interface IRestData {
    type: RestType;
    startHealth: number;
    totalCycles: number;
    itemId?: number;
    cycle?: number;
    cancelReason?: RestCancelReason;
}
export declare type IPlayerOld = Partial<IPlayer> & {
    gender: 0 | 1;
    talent: number;
    stamina: number;
    staminaRegen: number;
    staminaTimer: number;
    thirst: number;
    thirstRegen: number;
    thirstTimer: number;
    hunger: number;
    hungerRegen: number;
    hungerTimer: number;
    health: number;
    healthRegen: number;
    healthTimer: number;
    malignityPlus: number;
    malignityNegative: number;
};
export interface IMobCheck {
    x: number;
    y: number;
    z: number;
    creature?: ICreature;
    player?: IPlayer;
    obstacle?: boolean;
    water?: boolean;
}
export declare const setupSpawnItems: ItemType[];
export declare const setupWaterItems: ItemType[];
export declare const setupToolItems: ItemType[];
export declare const setupMiscItems: ItemType[];
export declare const gameMovement: IInputMovement[];
export interface IPlayerTravelData {
    starvation: number;
    dehydration: number;
    originalHealth: number;
    itemId: number | undefined;
    state: PlayerState;
}