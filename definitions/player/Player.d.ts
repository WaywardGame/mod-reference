import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import BaseHumanEntity from "entity/BaseHumanEntity";
import { EntityType } from "entity/IEntity";
import { Bindable, Delay, EquipType, FacingDirection, IInspect, IMessagePack, ItemType, PlayerState, SkillType, TurnType, WeightStatus } from "Enums";
import { IItem } from "item/IItem";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import { IAttackHand, IMobCheck, IPlayer, IPlayerTravelData } from "player/IPlayer";
import { ISkillSet } from "player/Skills";
import { IExploreMap } from "renderer/IExploreMap";
import { IOptions } from "save/data/ISaveDataGlobal";
import { IPreSerializeCallback } from "save/ISerializer";
import { ITile } from "tile/ITerrain";
import { HintType } from "ui/IHint";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
import { IPointZ } from "utilities/math/IPoint";
export default class Player extends BaseHumanEntity implements IPlayer, IPreSerializeCallback {
    entityType: EntityType.Player;
    absentLastUsedTime: number;
    attack: number;
    attackFromEquip: IAttackHand;
    benignity: number;
    containerSortInfo: {
        [index: string]: IContainerSortInfo;
    };
    currentHint: HintType;
    deathBy: string;
    defenses: number[];
    dialogContainerInfo: IDialogInfo[];
    dialogInfo: {
        [index: string]: IDialogInfo;
    };
    exploredMapEncodedData: number[][];
    handToUse: EquipType;
    hintSeen: boolean[];
    identifier: string;
    isConnecting: boolean;
    isMoving: boolean;
    lightBonus: number;
    malignity: number;
    movementComplete: boolean;
    movementCompleteZ: number | undefined;
    name: string;
    noInputReceived: boolean;
    options: IOptions;
    quickSlotInfo: IQuickSlotInfo[];
    realTimeTickActionDelay: number;
    revealedItems: {
        [index: number]: boolean;
    };
    score: number;
    skills: ISkillSet;
    spawnPoint: IPointZ;
    state: PlayerState;
    tamedCreatures: number[];
    travelData: IPlayerTravelData | undefined;
    turns: number;
    walkSoundCounter: number;
    weight: number;
    weightBonus: number;
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
    resetMovementStates(): void;
    attributes(): void;
    setId(id: number): void;
    setRaft(itemId: number | undefined): void;
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
    getMaxHealth(): number;
    setup(completedMilestones: number): void;
    preSerializeObject(): void;
    restoreExploredMap(): void;
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
    getName(html?: boolean): string;
    updateQuickSlotInfo(quickSlot: number, itemType?: ItemType, action?: IContextMenuAction): void;
    updateDialogInfo(dialogIndex: string | number): void;
    getDialogInfo(dialogIndex: string | number): IDialogInfo;
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    updateStatsAndAttributes(): void;
    passTurn(turnType?: TurnType): void;
    tick(isPassTurn?: boolean): void;
    kill(): void;
    getMovementProgress(): number;
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
    private restTick();
    private statGain(stat, bypass);
    private resetDefense();
    private calculateStats();
    private showStatsHint();
    private staminaSyncCheck();
}
