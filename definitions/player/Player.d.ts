import { ICreature, IDamageInfo } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { Bindable, Delay, EquipType, FacingDirection, IInspect, IMessagePack, IPoint, IPointZ, ItemQuality, ItemType, MoveType, PlayerState, RestCancelReason, SfxType, SkillType, StatType, TurnType, WeightStatus, WorldZ } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import { IAttackHand, IMobCheck, IPlayer, IPlayerCustomization, IPlayerStatus, IPlayerTravelData, IRestData } from "player/IPlayer";
import PlayerDefense from "player/PlayerDefense";
import { ISkillSet } from "player/Skills";
import { IExploreMap } from "renderer/IExploreMap";
import { IOptions } from "save/data/ISaveDataGlobal";
import { IPreSerializeCallback } from "save/ISerializer";
import { ITile } from "tile/ITerrain";
import { HintType } from "ui/IHint";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
export default class Player implements IPlayer, IPreSerializeCallback {
    absentLastUsedTime: number;
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
    exploredMapEncodedData: number[][];
    facingDirection: FacingDirection;
    handToUse: EquipType;
    hintSeen: boolean[];
    id: number;
    identifier: string;
    inventory: IContainer;
    isConnecting: boolean;
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
    travelData: IPlayerTravelData | undefined;
    turns: number;
    walkSoundCounter: number;
    weight: number;
    weightBonus: number;
    x: number;
    y: number;
    z: WorldZ;
    exploredMap: IExploreMap[] | undefined;
    exploredMapNotSaved: IExploreMap[] | undefined;
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
    private _milestoneUpdates;
    private _movementIntent;
    constructor();
    resetMovementStates(): void;
    attributes(): void;
    setId(id: number): void;
    setRaft(itemId: number | undefined): void;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    checkSkillMilestones(): void;
    staminaCheck(): boolean;
    addMilestone(milestone: MilestoneType, data?: number): void;
    damage(damageInfoOrAmount: IDamageInfo | number, damageMessage?: string, soundDelay?: number): number | undefined;
    calculateEquipmentStats(): void;
    getTile(): ITile;
    getPoint(): IPointZ;
    getFacingPoint(): IPointZ;
    getFacingTile(): ITile;
    getDefaultCarveTool(): IItem | undefined;
    isFacingCarvableTile(): boolean;
    hasTamedCreature(creature: ICreature): boolean;
    canJump(): boolean;
    canSeeTile(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    getHandToUse(): EquipType | undefined;
    getEquippedItems(): IItem[];
    getEquippedItem(slot: EquipType): IItem | undefined;
    getEquipSlotForItem(item: IItem): EquipType | undefined;
    equip(item: IItem, slot: EquipType, internal?: boolean, switchingHands?: boolean): void;
    unequip(item: IItem, internal?: boolean, skipMessage?: boolean, switchingHands?: boolean): void;
    unequipAll(): void;
    getMovementIntent(): Bindable | undefined;
    updateMovementIntent(bind: Bindable | undefined): void;
    damageEquipment(): void;
    getMaxHealth(): number;
    createItemInInventory(itemType: ItemType, quality?: ItemQuality): IItem;
    setup(completedMilestones: number): void;
    preSerializeObject(): void;
    restoreExploredMap(): void;
    shakeStat(statType: StatType): void;
    staminaReduction(skillType: SkillType): void;
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
    hurtHands(message: Message, damageMessage: Message): void;
    /**
     * Burn the player
     */
    burn(skipMessage?: boolean, skipParry?: boolean, equipType?: EquipType): number | undefined;
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
    isResting(): boolean;
    getName(html?: boolean): string;
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
    getConsumeBonus(skillUse: SkillType, item: IItem | undefined): number;
    revealItem(itemType: ItemType): void;
    getMovementFinishTime(): number;
    updateMilestones(): void;
    healthSyncCheck(): void;
    private slitherSuckerDamage();
    private processMovement(turnType?);
    private processTimers();
    private swimCheck();
    private isOnFire();
    private restTick();
    private statGain(stat, bypass);
    private resetDefense();
    private calculateStats();
    private showStatsHint();
    private staminaSyncCheck();
}
