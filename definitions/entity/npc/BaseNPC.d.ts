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
import { ActionType } from "entity/action/IAction";
import Human from "entity/Human";
import { AiType, EntityType } from "entity/IEntity";
import { EquipType, ICustomizations } from "entity/IHuman";
import { INPC } from "entity/npc/INPC";
import { IItem, ItemType } from "item/IItem";
import { ITile } from "tile/ITerrain";
export default abstract class BaseNPC extends Human implements INPC {
    protected static registrarId: number;
    readonly entityType: EntityType.NPC;
    readonly constructorFunction: typeof BaseNPC;
    ai: AiType;
    seen: number;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(id?: number, x?: number, y?: number, z?: number);
    getRegistrarId(): number;
    update(): void;
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
    updateDirection(x: number, y: number): void;
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
    protected abstract getDefaultCustomization(): ICustomizations;
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
    protected preMove(oldTile: ITile, tile: ITile): void;
    protected postMove(fromTile: ITile, toTile: ITile): void;
    private checkMove;
}
