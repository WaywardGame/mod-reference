import { AiType } from "entity/IEntity";
import { EquipType, ItemType } from "Enums";
import { IItem } from "item/IItem";
import BaseNPC from "npc/BaseNPC";
import { INPC } from "npc/INPC";
import { IPlayerCustomization } from "player/IPlayer";
export default class DeathKnightNPC extends BaseNPC implements INPC {
    constructor(id?: number, x?: number, y?: number, z?: number);
    protected getDefaultName(): string;
    protected initializeStats(): void;
    protected getDefaultCustomization(): IPlayerCustomization;
    protected getDefaultEquipment(equipType: EquipType): IItem | ItemType | undefined;
    protected getDefaultAiType(): AiType;
    protected getDefaultInventory(): Array<IItem | ItemType>;
}
