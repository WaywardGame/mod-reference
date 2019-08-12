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
import { NPCType } from "entity/npc/NPCS";
import { ItemType } from "item/IItem";
import Item from "item/Item";
import { ITile } from "tile/ITerrain";
export default abstract class NPC extends Human {
    protected static registrarId: number;
    readonly entityType: EntityType.NPC;
    readonly constructorFunction: typeof NPC;
    ai: AiType;
    seen: number;
    type: NPCType;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(type?: NPCType, id?: number, x?: number, y?: number, z?: number);
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
     * Returns the bartering bonus for a given credit value
     */
    getBarteringBonus(baseCredits: number): number;
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
    protected abstract getDefaultEquipment(equipType: EquipType): Item | ItemType | undefined;
    /**
     * Items the npc should spawn with - called when created
     * This is in addition to the equipment
     */
    protected abstract getDefaultInventory(): Array<Item | ItemType>;
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
