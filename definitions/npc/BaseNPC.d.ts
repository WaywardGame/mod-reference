import BaseHumanEntity from "entity/BaseHumanEntity";
import { AiType, EntityType } from "entity/IEntity";
import { ActionType, EquipType, ItemType } from "Enums";
import { IItem } from "item/IItem";
import { INPC } from "npc/INPC";
import { IPlayerCustomization } from "player/IPlayer";
export default abstract class BaseNPC extends BaseHumanEntity implements INPC {
    protected static registrarId: number;
    readonly entityType: EntityType.NPC;
    "constructor": typeof BaseNPC;
    ai: AiType;
    seen: number;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(id?: number, x?: number, y?: number, z?: number);
    getRegistrarId(): number;
    update(): void;
    moveTo(x: number, y: number, z: number): boolean;
    kill(): boolean;
    isHostile(): boolean;
    isWaiting(): boolean;
    getDamageModifier(): number;
    makeHostile(): void;
    /**
     * The actions available to use with this npc
     */
    getActions(): ActionType[] | undefined;
    addAiType(ai: AiType): void;
    /**
     * The name of the npc - called when created
     */
    protected abstract getDefaultName(): string;
    /**
     * Initialize stats
     */
    protected abstract initializeStats(): void;
    /**
     * The customizations of the npc - called when created
     */
    protected abstract getDefaultCustomization(): IPlayerCustomization;
    /**
     * The equip the npc spawns with - called for every equip type when the npc is created
     */
    protected abstract getDefaultEquipment(equipType: EquipType): IItem | ItemType | undefined;
    /**
     * Items the npc should spawn with - called when created
     * This is in addition to the equipment
     */
    protected abstract getDefaultInventory(): Array<IItem | ItemType>;
    /**
     * The ai type
     */
    protected abstract getDefaultAiType(): AiType;
    /**
     * The reputation change when the npc dies
     */
    protected getReputationChangeOnDeath(): number;
    protected attack(): boolean;
    protected move(): boolean;
    protected autoScaleStats(): void;
    private checkMove;
    private updateDirection;
}
