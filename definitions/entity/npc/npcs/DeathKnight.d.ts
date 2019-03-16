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
import { AiType } from "entity/IEntity";
import { EquipType, ICustomizations } from "entity/IHuman";
import BaseNPC from "entity/npc/BaseNPC";
import { INPC } from "entity/npc/INPC";
import { IItem, ItemType } from "item/IItem";
export default class DeathKnightNPC extends BaseNPC implements INPC {
    constructor(id?: number, x?: number, y?: number, z?: number);
    protected getDefaultName(): string;
    protected initializeStats(): void;
    protected getDefaultCustomization(): ICustomizations;
    protected getDefaultEquipment(equipType: EquipType): IItem | ItemType | undefined;
    protected getDefaultAiType(): AiType;
    protected getDefaultInventory(): Array<IItem | ItemType>;
}
