/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import DoodadInfo from "doodad/DoodadInfo";
import { IDoodad, IDoodadDescription, IDoodadDoor, IDoodadOptions } from "doodad/IDoodad";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { ActionType, DoodadType, DoorOrientation, EquipType, GrowingStage, IInspect, ItemQuality, ItemType, SentenceCaseStyle } from "Enums";
import { IItemArray } from "item/IItem";
import { Message } from "language/IMessages";
import { IPlayer } from "player/IPlayer";
import { IUnserializedCallback } from "save/ISerializer";
import { ITile } from "tile/ITerrain";
export default class Doodad implements IDoodad, Partial<IDoodadDoor>, IUnserializedCallback {
    protected static registrarId: number;
    "constructor": typeof Doodad;
    containedItems: IItemArray;
    decay?: number;
    gatherReady?: boolean;
    gfx?: number;
    id: number;
    itemOrders?: number[];
    maxDur?: number;
    minDur?: number;
    orientation?: DoorOrientation;
    ownerIdentifier?: string;
    quality?: ItemQuality;
    renamed?: string;
    spread?: number;
    treasure?: boolean;
    type: DoodadType;
    weight?: number;
    weightCapacity: number;
    x: number;
    y: number;
    z: number;
    step: number | undefined;
    private _description;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(type?: DoodadType, x?: number, y?: number, z?: number, options?: IDoodadOptions);
    getRegistrarId(): number;
    description(): IDoodadDescription | undefined;
    changeType(doodadType: DoodadType): void;
    isValid(): boolean;
    getTile(): ITile;
    canGrow(): boolean;
    getGrowingStage(): GrowingStage | undefined;
    setGrowingStage(stage: GrowingStage, updateTile?: boolean): void;
    canPickup(player: IPlayer): boolean;
    getPickupTypes(): ItemType[] | undefined;
    getActions(): ActionType[] | undefined;
    canGather(): boolean;
    isGatherable(): boolean;
    isEmbers(): boolean;
    getDoodadInfo(): DoodadInfo | undefined;
    canHarvest(): boolean;
    canTrample(): boolean | undefined;
    checkForTrampling(humanOrCreatureId: IBaseHumanEntity | number): boolean;
    getDurabilityMessage(this: IDoodad): Message;
    getGrowingMessage(textCase: SentenceCaseStyle): string;
    getInspect(): IInspect[];
    isDangerous(): boolean;
    damage(forceBreak?: boolean, isTrample?: boolean, skipSound?: boolean, skipResources?: boolean): void;
    getDefaultDurability(): number;
    addTreasureChestLoot(): void;
    blocksMove(): boolean;
    update(): void;
    causeStatus(human: IBaseHumanEntity, equipType?: EquipType): void;
    setOffTrap(human?: IBaseHumanEntity, withMessage?: boolean): void;
    onUnserialized(): void;
}
