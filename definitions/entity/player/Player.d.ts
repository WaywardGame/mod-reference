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
import { CreatureType, ICreature } from "entity/creature/ICreature";
import Human from "entity/Human";
import { EntityType, StatusEffectChangeReason, StatusType } from "entity/IEntity";
import IHuman, { EquipType, IRestData, RestCancelReason, RestType, SkillType } from "entity/IHuman";
import { IStat, Stat } from "entity/IStats";
import { MilestoneType } from "entity/player/IMilestone";
import { IMovementIntent, IPlayer, IPlayerEvents, IPlayerTravelData, TurnType, WeightStatus } from "entity/player/IPlayer";
import MessageManager from "entity/player/MessageManager";
import NoteManager from "entity/player/note/NoteManager";
import QuestManager from "entity/player/quest/QuestManager";
import { ExtendedEvents } from "event/EventEmitter";
import { IContainer, IItem, ItemType } from "item/IItem";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { IExploreMap } from "renderer/IExploreMap";
import IClientStore from "save/clientStore/IClientStore";
import { IOptions } from "save/data/ISaveDataGlobal";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
export default class Player extends Human implements IPlayer {
    event: ExtendedEvents<this, Human, IPlayerEvents>;
    readonly entityType: EntityType.Player;
    absentLastUsedTime: number;
    containerSortInfo: {
        [index: string]: IContainerSortInfo;
    };
    dialogContainerInfo: IDialogInfo[];
    dialogInfo: {
        [index: string]: IDialogInfo;
    };
    hintSeen: boolean[];
    isConnecting: boolean;
    isMoving: boolean;
    lastAttackedBy: IHuman | ICreature | undefined;
    messages: MessageManager;
    movementComplete: boolean;
    movementCompleteZ: number | undefined;
    name: string;
    noInputReceived: boolean;
    notes: NoteManager;
    quests: QuestManager;
    quickSlotInfo: IQuickSlotInfo[];
    realTimeTickActionDelay: number;
    revealedItems: {
        [index: number]: boolean;
    };
    spawnPoint: IVector3;
    tamedCreatures: number[];
    travelData: IPlayerTravelData | undefined;
    turns: number;
    walkSoundCounter: number;
    walkPath: IVector2[] | undefined;
    exploredMap: IExploreMap[] | undefined;
    isMovingClientside: boolean;
    wasAbsentPlayer: boolean;
    nextX: number;
    nextY: number;
    movementProgress: number;
    movementFinishTime: number;
    nextMoveTime: number;
    nextMoveDirection: Direction | undefined;
    displayCreature?: CreatureType;
    private _milestoneUpdates;
    private readonly _movementIntent;
    constructor(identifier?: string);
    readonly clientStore: IClientStore;
    setOptions(options: IOptions): void;
    getDisplayCreature(): CreatureType | undefined;
    setStatChangeTimerIgnoreDifficultyOptions(stat: Stat | IStat, timer: number, amt?: number): void;
    setStatChangeTimer(stat: Stat | IStat, timer: number, amt?: number): void;
    setStatus(status: StatusType, hasStatus: boolean, reason: StatusEffectChangeReason): void;
    startResting(restData: IRestData): void;
    cancelResting(reason: RestCancelReason): boolean;
    showRestInterrupt(restType: RestType): void;
    /**
     * Updates caused by status effects such as bleeding, poison, and burns.
     */
    updateStatuses(): void;
    resetMovementStates(): void;
    setId(id: number): void;
    setRaft(itemId: number | undefined): boolean;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    checkSkillMilestones(): void;
    staminaCheck(): boolean;
    addMilestone(milestone: MilestoneType, data?: number): void;
    calculateEquipmentStats(): void;
    getDefaultCarveTool(): IItem | undefined;
    isFacingCarvableTile(): boolean;
    hasTamedCreature(creature: ICreature): boolean;
    hasHandToUse(): boolean;
    getAndSwitchHandToUse(): EquipType | undefined;
    /**
     * Ensure handToUse is valid given the players options
     */
    updateHandToUse(): void;
    equip(item: IItem, slot: EquipType, internal?: boolean, switchingHands?: boolean): void;
    unequip(item: IItem, internal?: boolean, skipMessage?: boolean, switchingHands?: boolean): void;
    unequipAll(): void;
    getMovementIntent(): IMovementIntent | {
        intent: Direction;
        shouldDisableTurnDelay: boolean;
    };
    updateMovementIntent(movementIntent: IMovementIntent): void;
    resetStatTimers(): void;
    /**
     * Gets the max health of the player.
     *
     * Returns the result of `Hook.GetPlayerMaxHealth`, or the `max` in `Stat.Health`,
     * if the result of the hook is `undefined`.
     */
    getMaxHealth(): number;
    /**
     * Gets the strength of the player.
     *
     * Returns the result of `Hook.GetPlayerStrength`, or the `max` in `Stat.Health`,
     * if the result of the hook is `undefined`.
     *
     * Used internally for `Stat.Weight.max`
     */
    getMaxWeight(): number;
    setup(completedMilestones: number): void;
    updateReputation(reputation: number): void;
    checkWeight(): void;
    getWeightStatus(): WeightStatus;
    getWeightMovementPenalty(): number;
    checkForStill(): boolean;
    checkForWell(): boolean;
    checkForGather(): IDoodad | undefined;
    updateTables(): void;
    updateCraftTable(adjacentContainers?: IContainer[]): void;
    updateDismantleTable(adjacentContainers?: IContainer[]): void;
    updateTablesAndWeight(): void;
    checkReputationMilestones(): void;
    hurtHands(damageMessage: Message, toolMessage?: Message, hurtHandsMessage?: Message): boolean;
    setTamedCreatureEnemy(enemy: IPlayer | ICreature): void;
    setPosition(point: IVector3): void;
    getNextPosition(): IVector3;
    setZ(z: number): void;
    isGhost(): boolean;
    isServer(): boolean;
    getName(): Translation;
    canSeePosition(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    updateQuickSlotInfo(quickSlot: number, itemType?: ItemType, action?: IContextMenuAction): void;
    updateDialogInfo(dialogIndex: string | number): void;
    getDialogInfo(dialogIndex: string | number): IDialogInfo;
    passTurn(turnType?: TurnType): void;
    tick(isPassTurn?: boolean): void;
    kill(): void;
    getMovementProgress(): number;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    hasWalkPath(): boolean;
    walkAlongPath(path: IVector2[] | undefined): void;
    processInput(): void;
    faceDirection(direction: Direction, turnDelay?: number): boolean;
    revealItem(itemType: ItemType): void;
    getMovementFinishTime(): number;
    updateMilestones(): void;
    healthSyncCheck(): void;
    /**
     * This needs to be called whenever the player's strength requires an update.
     *
     * Example usage includes:
     * 1. When max health changes. Max health is used in calculating the strength.
     * 2. If a mod is using the `GetPlayerStrength` hook and the calculation needs to be refreshed.
     */
    updateStrength(): void;
    /**
     * Do not call.
     */
    moveTo(): boolean;
    protected calculateStats(): void;
    protected swimCheck(): void;
    private slitherSuckerDamage;
    private processMovement;
    /**
     * Event handler for when resting begins, weight changes, or strength changes.
     */
    private onStaminaUseChanged;
    /**
     * Event handler for when a status effect is applied or removed.
     */
    private onStatusEffectChanged;
    /**
     * Event handler for `EntityEvent.StatChanged`. Handles special functionality when stats are increased:
     * 1. When resting & stamina is full, resting will be cancelled.
     * 2. Health is sync-checked.
     * 3. When hunger > maximum, damage will be dealt, stamina will be decreased, and a message will be displayed.
     * 4. When thirst > maximum, damage will be dealt, stamina will be decreased, and a message will be displayed.
     */
    private onStatChange;
    private restTick;
    private staminaSyncCheck;
    private canWriteInHours;
    private canWriteNote;
    private onWriteNote;
    private shouldDisplayMessage;
    private onDisplayMessage;
}
