import BaseHumanEntity from "entity/BaseHumanEntity";
import { AiType, EntityType } from "entity/IEntity";
import { EquipType, ItemType } from "Enums";
import { IItem } from "item/IItem";
import { INPC } from "npc/INPC";
import { IPlayerCustomization } from "player/IPlayer";
export default abstract class BaseNPC extends BaseHumanEntity implements INPC {
    protected static registrarId: number;
    entityType: EntityType.NPC;
    "constructor": typeof BaseNPC;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(id?: number, x?: number, y?: number, z?: number);
    getRegistrarId(): number;
    update(): void;
    moveTo(x: number, y: number, z: number): boolean;
    protected abstract getName(): string;
    protected abstract getCustomization(): IPlayerCustomization;
    protected abstract getEquipment(equipType: EquipType): IItem | ItemType | undefined;
    protected abstract getAiType(): AiType;
    protected move(): boolean;
    private checkMove(tileX, tileY, tileZ);
}
