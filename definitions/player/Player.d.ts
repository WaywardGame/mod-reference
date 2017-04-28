import { Delay, EquipType, FacingDirection, IInputMovement, IInspect, IPoint, IPointZ, ItemQuality, ItemType, KeyBind, MoveType, PlayerState, RestCancelReason, SfxType, SkillType, StatType, TurnType, WorldZ } from "Enums";
import IFlowFieldManager from "flowfield/IFlowFieldManager";
import IOptions from "game/IOptions";
import { IContainer, IItem } from "item/IItem";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import { IAttackHand, IMobCheck, IPlayer, IPlayerCustomization, IRestData } from "player/IPlayer";
import PlayerDefense from "player/PlayerDefense";
import { ISkillSet } from "player/Skills";
import { ITile } from "tile/ITerrain";
import { HintType } from "ui/IHint";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
export default class Player implements IPlayer {
    private static gameMovement;
    id: number;
    identifier: string;
    wasAbsentPlayer: boolean;
    customization: IPlayerCustomization;
    name: string;
    options: IOptions;
    flowFieldManager: IFlowFieldManager;
    tamedCreatures: number[];
    moveType: MoveType;
    attack: number;
    attackFromEquip: IAttackHand;
    deathBy: string;
    defense: PlayerDefense;
    defenses: number[];
    direction: IPoint;
    facingDirection: FacingDirection;
    isMoving: boolean;
    hintSeen: boolean[];
    inventory: IContainer;
    lightBonus: number;
    state: PlayerState;
    skills: ISkillSet;
    status: {
        bleeding: boolean;
        burned: boolean;
        poisoned: boolean;
    };
    swimming: boolean;
    restData: IRestData | undefined;
    dehydration: number;
    dexterity: number;
    starvation: number;
    strength: number;
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
    /**
     * Player strength !== max health
     */
    turns: number;
    weight: number;
    x: number;
    y: number;
    z: WorldZ;
    fromX: number;
    fromY: number;
    nextX: number;
    nextY: number;
    malignity: number;
    benignity: number;
    score: number;
    weightBonus: number;
    walkSoundCounter: number;
    nextProcessInput: number;
    raft: number | undefined;
    handToUse: EquipType;
    spawnPoint: IPointZ;
    equipped: {
        [index: number]: number;
    };
    realTimeTickActionDelay: number;
    dialogInfo: {
        [index: string]: IDialogInfo;
    };
    dialogContainerInfo: IDialogInfo[];
    quickSlotInfo: IQuickSlotInfo[];
    containerSortInfo: {
        [index: string]: IContainerSortInfo;
    };
    currentHint: HintType;
    movement: IInputMovement;
    movementProgress: number;
    movementFinishTime: number;
    movementCompleted: boolean;
    movementAnimation: number;
    movementCompleteZ: number | undefined;
    nextMoveDirection: FacingDirection | undefined;
    private mousePlayerDirection;
    private touchPlayerDirection;
    private keyBindState;
    private lastKeyBindSynced;
    private lastKeyBindSyncedState;
    constructor();
    resetMovementStates(): void;
    createFlowFieldManager(): void;
    attributes(): void;
    setId(id: number): void;
    setRaft(itemId: number | undefined): void;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    staminaCheck(): boolean;
    addMilestone(milestone: MilestoneType, data?: number): void;
    damage(amount: number, damageMessage: string, soundDelay?: number): void;
    calculateEquipmentStats(): void;
    canCarve(): IItem | undefined;
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
    checkAndRemoveBlood(): boolean;
    updateCraftTableAndWeight(): void;
    checkReputationMilestones(): void;
    getReputation(): number;
    hurtHands(message: Message, damageMessage: Message): void;
    /**
     * Burn the player
     * @param skipMessage
     */
    burn(skipMessage?: boolean): number | undefined;
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
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    passTurn(turnType?: TurnType): void;
    tick(isPassTurn?: boolean): void;
    calculateStats(): void;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    queueSoundEffectInFront(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    kill(): void;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    processInput(): void;
    private processMovement(turnType?);
    private processTimers();
    private swimCheck();
    private isOnFire();
    private canTryCarve();
    private restTick();
    private statGain(stat, bypass);
    private resetDefense();
    private showStatsHint();
}
