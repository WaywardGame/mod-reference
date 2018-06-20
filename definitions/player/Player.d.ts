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
import BaseHumanEntity from "entity/BaseHumanEntity";
import { EntityType } from "entity/IEntity";
import { Delay, Direction, EquipType, IInspect, ItemType, SkillType, TurnType, WeightStatus } from "Enums";
import { IItem } from "item/IItem";
import { IMessagePack, Message } from "language/IMessages";
import { MilestoneType } from "player/IMilestone";
import { IMovementIntent, IPlayer, IPlayerTravelData, IRestData } from "player/IPlayer";
import MessageManager from "player/MessageManager";
import NoteManager from "player/NoteManager";
import { IExploreMap } from "renderer/IExploreMap";
import { IPreSerializeCallback } from "save/ISerializer";
import { ITile } from "tile/ITerrain";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
import { IVector3 } from "utilities/math/IVector";
export default class Player extends BaseHumanEntity implements IPlayer, IPreSerializeCallback {
    readonly entityType: EntityType.Player;
    absentLastUsedTime: number;
    containerSortInfo: {
        [index: string]: IContainerSortInfo;
    };
    dialogContainerInfo: IDialogInfo[];
    dialogInfo: {
        [index: string]: IDialogInfo;
    };
    exploredMapEncodedData: number[][];
    hintSeen: boolean[];
    identifier: string;
    isConnecting: boolean;
    isMoving: boolean;
    messages: MessageManager;
    movementComplete: boolean;
    movementCompleteZ: number | undefined;
    name: string;
    noInputReceived: boolean;
    notes: NoteManager;
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
    exploredMap: IExploreMap[] | undefined;
    exploredMapNotSaved: IExploreMap[] | undefined;
    isMovingClientside: boolean;
    wasAbsentPlayer: boolean;
    nextX: number;
    nextY: number;
    nextProcessInput: number;
    movementProgress: number;
    movementFinishTime: number;
    nextMoveTime: number;
    nextMoveDirection: Direction | undefined;
    private _milestoneUpdates;
    private readonly _movementIntent;
    constructor();
    startResting(restData: IRestData): void;
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
    canJump(): boolean;
    hasHandToUse(): boolean;
    getHandToUse(): EquipType | undefined;
    equip(item: IItem, slot: EquipType, internal?: boolean, switchingHands?: boolean): void;
    unequip(item: IItem, internal?: boolean, skipMessage?: boolean, switchingHands?: boolean): void;
    unequipAll(): void;
    getMovementIntent(): IMovementIntent;
    updateMovementIntent(movementIntent: IMovementIntent): void;
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
    getStrength(): number;
    setup(completedMilestones: number): void;
    preSerializeObject(): void;
    restoreExploredMap(): void;
    updateReputation(reputation: number): void;
    checkWeight(): void;
    getWeightStatus(): WeightStatus;
    getWeightMovementPenalty(): number;
    checkAndRemoveBlood(): boolean;
    checkForGatherFire(): string | undefined;
    checkForStill(): boolean;
    checkForGather(): IDoodad | undefined;
    updateTables(): void;
    updateCraftTable(): void;
    updateDismantleTable(): void;
    updateTablesAndWeight(): void;
    checkReputationMilestones(): void;
    getReputation(): number;
    hurtHands(message: Message, damageMessage: Message, hurtHands?: Message): void;
    hasDelay(): boolean;
    addDelay(delay: Delay, replace?: boolean): void;
    setTamedCreatureEnemy(enemy: IPlayer | ICreature): void;
    inspect(x: number, y: number, z?: number): void;
    inspectTile(tile: ITile): IInspect[];
    getInspectHealthMessage(player: IPlayer): IMessagePack;
    setPosition(point: IVector3): void;
    setZ(z: number): void;
    isLocalPlayer(): boolean;
    isGhost(): boolean;
    isServer(): boolean;
    getName(): string;
    updateQuickSlotInfo(quickSlot: number, itemType?: ItemType, action?: IContextMenuAction): void;
    updateDialogInfo(dialogIndex: string | number): void;
    getDialogInfo(dialogIndex: string | number): IDialogInfo;
    passTurn(turnType?: TurnType): void;
    tick(isPassTurn?: boolean): void;
    kill(): void;
    getMovementProgress(): number;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    processInput(): void;
    faceDirection(direction: Direction, ignoreTurnDelay?: boolean): boolean;
    getConsumeBonus(item: IItem | undefined, skillUse: SkillType | undefined): number;
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
