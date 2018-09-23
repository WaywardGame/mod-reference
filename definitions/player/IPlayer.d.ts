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
import { IDoodad } from "doodad/IDoodad";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { EntityType } from "entity/IEntity";
import { Delay, Direction, EquipType, HairColor, HairStyle, IModdable, IRGB, ItemType, PlayerState, RestCancelReason, RestType, SkillType, SkinColor, TurnType, WeightStatus } from "Enums";
import { IItem } from "item/IItem";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { INPC } from "npc/INPC";
import MessageManager from "player/MessageManager";
import NoteManager from "player/NoteManager";
import { IExploreMap } from "renderer/IExploreMap";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
import { IVector2, IVector3 } from "utilities/math/IVector";
export interface IPlayer extends IBaseHumanEntity {
    entityType: EntityType.Player;
    absentLastUsedTime: number;
    containerSortInfo: {
        [index: string]: IContainerSortInfo;
    };
    dialogContainerInfo: IDialogInfo[];
    dialogInfo: {
        [index: string]: IDialogInfo;
    };
    exploredMapEncodedData: number[][];
    fromX: number;
    fromY: number;
    identifier: string;
    isConnecting: boolean;
    isMoving: boolean;
    isMovingClientside: boolean;
    lightBonus: number;
    messages: MessageManager;
    movementComplete: boolean;
    movementCompleteZ: number | undefined;
    movementProgress: number;
    name: string;
    nextMoveDirection: Direction | undefined;
    nextMoveTime: number;
    nextX: number;
    nextY: number;
    noInputReceived: boolean;
    notes: NoteManager;
    quickSlotInfo: IQuickSlotInfo[];
    revealedItems: {
        [index: number]: boolean;
    };
    spawnPoint: IVector3 | undefined;
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
    addDelay(delay: Delay, replace?: boolean): void;
    calculateEquipmentStats(): void;
    canJump(): boolean;
    checkAndRemoveBlood(): boolean;
    checkForGather(): IDoodad | undefined;
    checkForGatherFire(): Translation | undefined;
    checkForStill(): boolean;
    checkReputationMilestones(): void;
    checkSkillMilestones(): void;
    checkWeight(): void;
    equip(item: IItem, slot: EquipType, internal?: boolean, switchingHands?: boolean): void;
    /**
     * Returns true if the player changed their facing direction.
     */
    faceDirection(direction: Direction, ignoreTurnDelay?: boolean): boolean;
    getConsumeBonus(item: IItem | undefined, skillUse: SkillType | undefined): number;
    getDefaultCarveTool(): IItem | undefined;
    getDialogInfo(dialogIndex: string | number): IDialogInfo;
    getInspectHealthMessage(player: IPlayer): Message | Translation;
    getMovementIntent(): IMovementIntent;
    getReputation(): number;
    getStrength(): number;
    getWeightMovementPenalty(): number;
    getWeightStatus(): WeightStatus;
    hasDelay(): boolean;
    hasTamedCreature(creature: ICreature): boolean;
    hasWalkPath(): boolean;
    healthSyncCheck(): void;
    hurtHands(damageMessage: Message, toolMessage?: Message, hurtHandsMessage?: Message): boolean;
    isFacingCarvableTile(): boolean;
    isLocalPlayer(): boolean;
    isServer(): boolean;
    passTurn(turnType?: TurnType): void;
    processInput(): void;
    resetMovementStates(): void;
    restoreExploredMap(): void;
    revealItem(itemType: ItemType): void;
    setId(id: number): void;
    setPosition(point: IVector3): void;
    setTamedCreatureEnemy(enemy: IPlayer | ICreature): void;
    setup(completedMilestones: number): void;
    setZ(z: number): void;
    showRestInterrupt(restType: RestType): void;
    staminaCheck(): boolean;
    tick(isPassTurn?: boolean): void;
    unequip(item: IItem, internal?: boolean, skipMessage?: boolean, switchingHands?: boolean): void;
    unequipAll(): void;
    updateCraftTable(): void;
    updateDialogInfo(dialogIndex: string | number): void;
    updateDismantleTable(): void;
    updateMilestones(): void;
    updateMovementIntent(intent: IMovementIntent): void;
    updateQuickSlotInfo(quickSlot: number, itemType?: ItemType, action?: IContextMenuAction): void;
    updateStatuses(): void;
    updateStrength(): void;
    updateTables(): void;
    updateTablesAndWeight(): void;
    walkAlongPath(path: IVector2[] | undefined): void;
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
export interface ICharacter {
    name: string;
    customization: IPlayerCustomization;
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
export declare function getDirectionFromMovement(x: number, y: number): Direction.East | Direction.North | Direction.West | Direction.South;
export interface IInputMovement extends IVector2 {
    moveBind: Direction;
    direction: Direction;
}
export declare const gameMovement: IInputMovement[];
export declare type MovementIntent = Direction | "idle" | undefined;
export declare const movementIntents: MovementIntent[];
export interface IMovementIntent {
    /**
     * A cardinal direction, the tile location of a tile to move to, to idle, or undefined to do nothing.
     */
    intent?: MovementIntent;
    shouldDisableTurnDelay: boolean;
}
export interface IPlayerTravelData {
    starvation: number;
    dehydration: number;
    originalHealth: number;
    itemId: number | undefined;
    state: PlayerState;
}
export declare const weightBonus = 25;
export declare function isPlayer(human?: IBaseHumanEntity): human is IPlayer;
export declare function isLocalPlayer(human?: IBaseHumanEntity): boolean;
