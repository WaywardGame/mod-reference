import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { Delay, EquipType, FacingDirection, IInspect, IPoint, IPointZ, ItemQuality, ItemType, KeyBind, MoveType, PlayerState, RestCancelReason, SfxType, SkillType, StatType, TurnType, WeightStatus, WorldZ } from "Enums";
import IOptions from "game/IOptions";
import { IContainer, IItem } from "item/IItem";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import { IAttackHand, IMobCheck, IPlayer, IPlayerCustomization, IPlayerStatus, IRestData } from "player/IPlayer";
import PlayerDefense from "player/PlayerDefense";
import { ISkillSet } from "player/Skills";
import { ITile } from "tile/ITerrain";
import { HintType } from "ui/IHint";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
export default class Player implements IPlayer {
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
    handToUse: EquipType;
    hintSeen: boolean[];
    id: number;
    identifier: string;
    inventory: IContainer;
    isMoving: boolean;
    lightBonus: number;
    malignity: number;
    movementComplete: boolean;
    movementCompleteZ: number | undefined;
    moveType: MoveType;
    name: string;
    noInputReceived: boolean;
    options: IOptions;
    quickSlotInfo: IQuickSlotInfo[];
    raft: number | undefined;
    realTimeTickActionDelay: number;
    restData: IRestData | undefined;
    revealedItems: {
        [index: number]: boolean;
    };
    score: number;
    skills: ISkillSet;
    spawnPoint: IPointZ;
    starvation: number;
    state: PlayerState;
    stats: {
        health: {
            value: number;
            timer: number;
            regen: number;
            regenBase: number;
        };
        stamina: {
            value: number;
            timer: number;
            regen: number;
            regenBase: number;
        };
        hunger: {
            value: number;
            timer: number;
            regen: number;
            regenBase: number;
        };
        thirst: {
            value: number;
            timer: number;
            regen: number;
            regenBase: number;
        };
    };
    status: IPlayerStatus;
    stopNextMovement: boolean;
    strength: number;
    swimming: boolean;
    tamedCreatures: number[];
    turns: number;
    walkSoundCounter: number;
    weight: number;
    x: number;
    y: number;
    z: WorldZ;
    weightBonus: number;
    isMovingClientside: boolean;
    wasAbsentPlayer: boolean;
    fromX: number;
    fromY: number;
    nextX: number;
    nextY: number;
    nextProcessInput: number;
    movementProgress: number;
    movementFinishTime: number;
    movementAnimation: number;
    nextMoveTime: number;
    nextMoveDirection: FacingDirection | undefined;
    private milestoneUpdates;
    private mousePlayerDirection;
    private touchPlayerDirection;
    private keyBindState;
    private lastKeyBindSynced;
    private lastKeyBindSyncedState;
    constructor();
    resetMovementStates(): void;
    attributes(): void;
    setId(id: number): void;
    setRaft(itemId: number | undefined): void;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    checkSkillMilestones(): void;
    staminaCheck(): boolean;
    addMilestone(milestone: MilestoneType, data?: number): void;
    damage(amount: number, damageMessage: string, soundDelay?: number): void;
    calculateEquipmentStats(): void;
    canCarve(): IItem | undefined;
    canRelease(creature: ICreature): boolean;
    canJump(): boolean;
    canSeeTile(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    getHandToUse(): EquipType | undefined;
    getEquippedItems(): IItem[];
    getEquippedItem(slot: EquipType): IItem | undefined;
    getEquipSlotForItem(item: IItem): EquipType | undefined;
    equip(item: IItem, slot: EquipType, internal?: boolean, switchingHands?: boolean): void;
    unequip(item: IItem, internal?: boolean, skipMessage?: boolean, switchingHands?: boolean): void;
    unequipAll(): void;
    isBindDown(key: KeyBind): boolean;
    getBindDownTime(key: KeyBind): number | undefined;
    getMouseDirection(): FacingDirection;
    setMouseDirection(playerDirection: FacingDirection): void;
    getTouchDirection(): FacingDirection | undefined;
    setTouchDirection(playerDirection: FacingDirection | undefined): void;
    resetKeyBindState(): void;
    updateKeyBindState(key: KeyBind, state: number | undefined): void;
    damageEquipment(): void;
    getMaxHealth(): number;
    createItemInInventory(itemType: ItemType, quality?: ItemQuality): IItem;
    setup(completedMilestones: number): void;
    getSerializationProperties(_: string): string[];
    shakeStat(statType: StatType): void;
    staminaReduction(skillType: SkillType): void;
    updateReputation(reputation: number): void;
    checkWeight(): void;
    getWeightStatus(): WeightStatus;
    getWeightPenalty(): number;
    checkAndRemoveBlood(): boolean;
    checkForGatherFire(): string | undefined;
    checkForStill(): boolean;
    checkForGather(): IDoodad | undefined;
    updateCraftTable(updateDismantleItems: boolean): void;
    updateCraftTableAndWeight(): void;
    checkReputationMilestones(): void;
    getReputation(): number;
    hurtHands(message: Message, damageMessage: Message): void;
    /**
     * Burn the player
     * @param skipMessage
     */
    burn(skipMessage?: boolean, skipParry?: boolean): number | undefined;
    hasDelay(): boolean;
    addDelay(delay: Delay, replace?: boolean): void;
    inspect(x: number, y: number, z?: number): void;
    inspectTile(tile: ITile): IInspect[];
    setZ(z: number): void;
    isLocalPlayer(): boolean;
    isGhost(): boolean;
    isResting(): boolean;
    isRestingCancelled(): boolean;
    startResting(restData: IRestData): void;
    cancelResting(reason: RestCancelReason): void;
    updateQuickSlotInfo(quickSlot: number, itemType?: ItemType, action?: IContextMenuAction): void;
    updateDialogInfo(dialogIndex: string | number): void;
    getDialogInfo(dialogIndex: string | number): IDialogInfo;
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    updateStatsAndAttributes(): void;
    passTurn(turnType?: TurnType): void;
    tick(isPassTurn?: boolean): void;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    queueSoundEffectInFront(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    kill(): void;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    processInput(): void;
    getConsumeBonus(skillUse: SkillType, itemQuality: ItemQuality | undefined): number;
    revealItem(itemType: ItemType): void;
    getMovementFinishTime(): number;
    private processMovement(turnType?);
    private processTimers();
    private swimCheck();
    private updateMilestones();
    private isOnFire();
    private canTryCarve();
    private restTick();
    private statGain(stat, bypass);
    private resetDefense();
    private calculateStats();
    private showStatsHint();
}
