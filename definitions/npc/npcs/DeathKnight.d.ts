import { AiType } from "entity/IEntity";
import { DamageType, EquipType, ItemType } from "Enums";
import { IItem } from "item/IItem";
import BaseNPC from "npc/BaseNPC";
import { INPC } from "npc/INPC";
import { IPlayerCustomization } from "player/IPlayer";
export default class DeathKnightNPC extends BaseNPC implements INPC {
    constructor(id?: number, x?: number, y?: number, z?: number);
    update(): void;
    protected getName(): string;
    protected getCustomization(): IPlayerCustomization;
    protected getEquipment(equipType: EquipType): IItem | ItemType | undefined;
    protected getAiType(): AiType;
    protected getInventory(): Array<IItem | ItemType>;
    protected getAttackDamage(): number;
    protected getAttackDamageType(): DamageType;
}