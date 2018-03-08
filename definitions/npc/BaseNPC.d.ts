import BaseHumanEntity from "entity/BaseHumanEntity";
import { AiType, EntityType } from "entity/IEntity";
import { ActionType, DamageType, EquipType, ItemType } from "Enums";
import { IItem } from "item/IItem";
import { INPC } from "npc/INPC";
import { IPlayerCustomization } from "player/IPlayer";
export default abstract class BaseNPC extends BaseHumanEntity implements INPC {
    protected static registrarId: number;
    entityType: EntityType.NPC;
    "constructor": typeof BaseNPC;
    ai: AiType;
    seen: boolean;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(id?: number, x?: number, y?: number, z?: number);
    getRegistrarId(): number;
    update(): void;
    moveTo(x: number, y: number, z: number): boolean;
    kill(): void;
    isHostile(): boolean;
    /**
     * The actions available to use with this npc
     */
    getActions(): ActionType[] | undefined;
    /**
     * The name of the npc - called when created
     */
    protected abstract getName(): string;
    /**
     * The customizations of the npc - called when created
     */
    protected abstract getCustomization(): IPlayerCustomization;
    /**
     * The equip the npc spawns with - called for every equip type when the npc is created
     */
    protected abstract getEquipment(equipType: EquipType): IItem | ItemType | undefined;
    /**
     * Items the npc should spawn with - called when created
     * This is in addition to the equipment
     */
    protected abstract getInventory(): Array<IItem | ItemType>;
    /**
     * The ai type
     */
    protected abstract getAiType(): AiType;
    /**
     * Called when the npc is attacking a player
     */
    protected getAttackDamage(): number;
    /**
     * Called when the npc is attacking a player
     */
    protected getAttackDamageType(): DamageType;
    protected attack(): boolean;
    protected move(): boolean;
    private checkMove(tileX, tileY, tileZ);
    private updateDirection(x, y);
}
