import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import BaseHumanEntity from "entity/BaseHumanEntity";
import { EntityType } from "entity/IEntity";
import { Bindable, Delay, EquipType, FacingDirection, IInspect, IMessagePack, ItemType, SkillType, TurnType, WeightStatus } from "Enums";
import { IItem } from "item/IItem";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import { IPlayer, IPlayerTravelData, IRestData } from "player/IPlayer";
import { IExploreMap } from "renderer/IExploreMap";
import { IPreSerializeCallback } from "save/ISerializer";
import { ITile } from "tile/ITerrain";
import { HintType } from "ui/IHint";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
import { IPointZ } from "utilities/math/IPoint";
export default class Player extends BaseHumanEntity implements IPlayer, IPreSerializeCallback {
    readonly entityType: EntityType.Player;
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
    hintSeen: boolean[];
    identifier: string;
    isConnecting: boolean;
    isMoving: boolean;
    movementComplete: boolean;
    movementCompleteZ: number | undefined;
    name: string;
    noInputReceived: boolean;
    quickSlotInfo: IQuickSlotInfo[];
    realTimeTickActionDelay: number;
    revealedItems: {
        [index: number]: boolean;
    };
    spawnPoint: IPointZ;
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
    nextMoveDirection: FacingDirection | undefined;
    private _milestoneUpdates;
    private _movementIntent;
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
    getHandToUse(): EquipType | undefined;
    equip(item: IItem, slot: EquipType, internal?: boolean, switchingHands?: boolean): void;
    unequip(item: IItem, internal?: boolean, skipMessage?: boolean, switchingHands?: boolean): void;
    unequipAll(): void;
    getMovementIntent(): Bindable | undefined;
    updateMovementIntent(bind: Bindable | undefined): void;
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
    setPosition(point: IPointZ): void;
    setZ(z: number): void;
    isLocalPlayer(): boolean;
    isGhost(): boolean;
    isServer(): boolean;
    getName(html?: boolean): string;
    updateQuickSlotInfo(quickSlot: number, itemType?: ItemType, action?: IContextMenuAction): void;
    updateDialogInfo(dialogIndex: string | number): void;
    getDialogInfo(dialogIndex: string | number): IDialogInfo;
    passTurn(turnType?: TurnType): void;
    tick(isPassTurn?: boolean): void;
    kill(): void;
    getMovementProgress(): number;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    processInput(): void;
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
    private slitherSuckerDamage();
    private processMovement(turnType?);
    /**
     * Event handler for when resting begins, weight changes, or strength changes.
     */
    private onStaminaUseChanged();
    /**
     * Event handler for when a status effect is applied or removed.
     */
    private onStatusEffectChanged();
    /**
     * Event handler for `EntityEvent.StatChanged`. Handles special functionality when stats are increased:
     * 1. When resting & stamina is full, resting will be cancelled.
     * 2. Health is sync-checked.
     * 3. When hunger > maximum, damage will be dealt, stamina will be decreased, and a message will be displayed.
     * 4. When thirst > maximum, damage will be dealt, stamina will be decreased, and a message will be displayed.
     */
    private onStatChange(_, stat, oldValue, reason);
    private restTick();
    private showStatsHint();
    private staminaSyncCheck();
}
