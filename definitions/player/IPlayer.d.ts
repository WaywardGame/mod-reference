import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { EntityType } from "entity/IEntity";
import { Bindable, Delay, EquipType, FacingDirection, HairColor, HairStyle, IInputMovement, IInspect, IMessagePack, IModdable, IRGB, ItemType, PlayerState, RestCancelReason, RestType, SkillType, SkinColor, TurnType, WeightStatus } from "Enums";
import { IItem } from "item/IItem";
import { Message } from "language/Messages";
import { INPC } from "npc/INPC";
import { IExploreMap } from "renderer/IExploreMap";
import { ITile } from "tile/ITerrain";
import { HintType } from "ui/IHint";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
import { IPointZ } from "utilities/math/IPoint";
export interface IPlayer extends IBaseHumanEntity {
    entityType: EntityType.Player;
    absentLastUsedTime: number;
    containerSortInfo: {
        [index: string]: IContainerSortInfo;
    };
    currentHint: HintType;
    dialogContainerInfo: IDialogInfo[];
    dialogInfo: {
        [index: string]: IDialogInfo;
    };
    exploredMapEncodedData: number[][];
    fromX: number;
    fromY: number;
    hintSeen: boolean[];
    identifier: string;
    isConnecting: boolean;
    isMoving: boolean;
    isMovingClientside: boolean;
    lightBonus: number;
    movementComplete: boolean;
    movementCompleteZ: number | undefined;
    movementProgress: number;
    name: string;
    nextMoveDirection: FacingDirection | undefined;
    nextMoveTime: number;
    nextX: number;
    nextY: number;
    noInputReceived: boolean;
    quickSlotInfo: IQuickSlotInfo[];
    revealedItems: {
        [index: number]: boolean;
    };
    spawnPoint: IPointZ | undefined;
    tamedCreatures: number[];
    travelData: IPlayerTravelData | undefined;
    turns: number;
    walkSoundCounter: number;
    wasAbsentPlayer: boolean;
    x: number;
    y: number;
    z: number;
    movementFinishTime: number;
    exploredMap: IExploreMap[] | undefined;
    exploredMapNotSaved: IExploreMap[] | undefined;
    addDelay(delay: Delay, replace?: boolean): void;
    calculateEquipmentStats(): void;
    canJump(): boolean;
    checkAndRemoveBlood(): boolean;
    checkForGather(): IDoodad | undefined;
    checkForGatherFire(): string | undefined;
    checkForStill(): boolean;
    checkReputationMilestones(): void;
    checkSkillMilestones(): void;
    checkWeight(): void;
    equip(item: IItem, slot: EquipType, internal?: boolean, switchingHands?: boolean): void;
    getConsumeBonus(item: IItem | undefined, skillUse: SkillType | undefined): number;
    getDefaultCarveTool(): IItem | undefined;
    getDialogInfo(dialogIndex: string | number): IDialogInfo;
    getInspectHealthMessage(player: IPlayer): IMessagePack;
    getMovementIntent(): Bindable | undefined;
    getReputation(): number;
    getWeightMovementPenalty(): number;
    getWeightStatus(): WeightStatus;
    getStrength(): number;
    hasDelay(): boolean;
    hasTamedCreature(creature: ICreature): boolean;
    healthSyncCheck(): void;
    hurtHands(message: Message, damageMessage: Message): void;
    inspect(x: number, y: number, z?: number): void;
    inspectTile(tile: ITile): IInspect[];
    isFacingCarvableTile(): boolean;
    isServer(): boolean;
    isLocalPlayer(): boolean;
    passTurn(turnType?: TurnType): void;
    processInput(): void;
    resetMovementStates(): void;
    restoreExploredMap(): void;
    revealItem(itemType: ItemType): void;
    setId(id: number): void;
    setTamedCreatureEnemy(enemy: IPlayer | ICreature): void;
    setup(completedMilestones: number): void;
    setPosition(point: IPointZ): void;
    setZ(z: number): void;
    staminaCheck(): boolean;
    tick(isPassTurn?: boolean): void;
    unequip(item: IItem, internal?: boolean, skipMessage?: boolean, switchingHands?: boolean): void;
    unequipAll(): void;
    updateCraftTable(): void;
    updateDialogInfo(dialogIndex: string | number): void;
    updateDismantleTable(): void;
    updateMilestones(): void;
    updateMovementIntent(bind: Bindable | undefined): void;
    updateQuickSlotInfo(quickSlot: number, itemType?: ItemType, action?: IContextMenuAction): void;
    updateStatuses(): void;
    updateStrength(): void;
    updateTables(): void;
    updateTablesAndWeight(): void;
}
export default IPlayer;
export interface IHairstyleDescription extends IModdable {
    name: string;
    imagePath?: string;
}
export interface IColorDescription extends IModdable {
    color: IRGB;
}
export interface IPlayerCustomization {
    hairStyle: keyof typeof HairStyle;
    hairColor: keyof typeof HairColor;
    skinColor: keyof typeof SkinColor;
}
export interface IAttackHand {
    leftHand: number;
    rightHand: number;
}
export interface IRestData {
    type: RestType;
    startHealth: number;
    totalCycles: number;
    itemId?: number;
    doodadId?: number;
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
    customization: {
        hairStyle: HairStyle;
        hairColor: HairColor;
        skinColor: SkinColor;
    };
    stats: IStatsOld;
    strength: number;
    dexterity: number;
    starvation: number;
    dehydration: number;
    weight: number;
    attack: number;
    benignity: number;
    malignity: number;
};
export interface IStatsOld {
    health: IStatOld;
    stamina: IStatOld;
    hunger: IStatOld;
    thirst: IStatOld;
}
export interface IStatOld {
    value: number;
    timer: number;
    regen: number;
    regenBase: number;
}
export interface IMobCheck {
    x: number;
    y: number;
    z: number;
    creature?: ICreature;
    player?: IPlayer;
    npc?: INPC;
    obstacle?: boolean;
    water?: boolean;
}
export declare const setupSpawnItems: ItemType[];
export declare const setupWaterItems: ItemType[];
export declare const setupToolItems: ItemType[];
export declare const setupMiscItems: ItemType[];
export declare const gameMovement: IInputMovement[];
export interface IMovementIntent {
    bind: Bindable;
    direction?: FacingDirection;
}
export interface IPlayerTravelData {
    starvation: number;
    dehydration: number;
    originalHealth: number;
    itemId: number | undefined;
    state: PlayerState;
}
export declare const weightBonus = 25;
