import { AiType } from "entity/IEntity";
import { ActionType, EquipType, ItemType } from "Enums";
import { IItem } from "item/IItem";
import BaseNPC from "npc/BaseNPC";
import { INPC } from "npc/INPC";
import { IPlayerCustomization } from "player/IPlayer";
export default class MerchantNPC extends BaseNPC implements INPC {
    constructor(id?: number, x?: number, y?: number, z?: number);
    update(): void;
    getActions(): ActionType[] | undefined;
    protected getReputationChangeOnDeath(): number;
    protected getDefaultName(): string;
    protected initializeStats(): void;
    protected getDefaultCustomization(): IPlayerCustomization;
    protected getDefaultEquipment(equipType: EquipType): IItem | ItemType | undefined;
    protected getDefaultInventory(): Array<IItem | ItemType>;
    protected getDefaultAiType(): AiType;
    private onStatChange;
}
