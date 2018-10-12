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
import { IInspect } from "action/actions/Inspect";
import { ICreature } from "creature/ICreature";
import DoodadInfo from "doodad/DoodadInfo";
import { IDoodad, IDoodadDescription, IDoodadDoor, IDoodadOptions, IWell } from "doodad/IDoodad";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { ActionType, DoodadType, DoorOrientation, EquipType, GrowingStage, IRGB, ItemQuality, ItemType } from "Enums";
import { IItemArray } from "item/IItem";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
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
    well: IWell;
    private _description;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(type?: DoodadType, x?: number, y?: number, z?: number, options?: IDoodadOptions);
    getRegistrarId(): number;
    getName(article?: boolean, count?: number): Translation;
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
    checkForTrampling(source: IBaseHumanEntity | ICreature): boolean;
    getDurabilityMessage(this: IDoodad): Message;
    getInspect(): IInspect[];
    isDangerous(player: IPlayer): boolean;
    getDamage(human: IBaseHumanEntity, equipType?: EquipType): number;
    damage(forceBreak?: boolean, skipDropAsItem?: boolean, skipSound?: boolean, skipResources?: boolean): void;
    getDefaultDurability(): number;
    addTreasureChestLoot(): void;
    blocksMove(): boolean;
    update(): void;
    canCauseStatus(human: IBaseHumanEntity, equipType?: EquipType): boolean;
    causeStatus(human: IBaseHumanEntity, equipType?: EquipType): void;
    setOffTrap(human?: IBaseHumanEntity, withMessage?: boolean): void;
    getGrowthParticles(): IRGB | undefined;
    onUnserialized(): void;
    private processSpecials;
    /**
     * Check for items on top of lit/fire doodads, set them on fire
     */
    private processFire;
    /**
     * Fill wells back up randomly (simulating rain)
     */
    private processWell;
    /**
     * Spread the doodad around the world
     */
    private processSpread;
    /**
     * Grow over time
     */
    private processGrowing;
    /**
     * Decay over time
     */
    private processDecay;
    private getGrowingStageTranslation;
}
