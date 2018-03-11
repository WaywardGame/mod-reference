import { AiType } from "entity/IEntity";
import { ActionType, EquipType, ItemType } from "Enums";
import { IItem } from "item/IItem";
import BaseNPC from "npc/BaseNPC";
import { INPC } from "npc/INPC";
import { IPlayerCustomization } from "player/IPlayer";
export default class MerchantNPC extends BaseNPC implements INPC {
    constructor(id?: number, x?: number, y?: number, z?: number);
    getActions(): ActionType[] | undefined;
    update(): void;
    protected getName(): string;
    protected getCustomization(): IPlayerCustomization;
    protected getEquipment(equipType: EquipType): IItem | ItemType | undefined;
    protected getInventory(): Array<IItem | ItemType>;
    protected getAiType(): AiType;
}