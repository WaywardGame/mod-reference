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
import { ActionType } from "action/IAction";
import { ICreature } from "creature/ICreature";
import DoodadInfo from "doodad/DoodadInfo";
import { IDoodad, IDoodadDescription, IDoodadDoor, IDoodadOptions } from "doodad/IDoodad";
import { DoodadType, DoorOrientation, EquipType, GrowingStage, IRGB, ItemQuality, ItemType } from "Enums";
import Inspection from "game/inspection/Inspect";
import { IInspectable, InspectionSection } from "game/inspection/Inspections";
import { IItemArray, IItemLegendary } from "item/IItem";
import Translation from "language/Translation";
import { IPlayer } from "player/IPlayer";
import { IUnserializedCallback } from "save/ISerializer";
import { ITile } from "tile/ITerrain";
declare class Doodad implements IDoodad, Partial<IDoodadDoor>, IUnserializedCallback, IInspectable {
    static getGrowingStageTranslation(growingStage?: GrowingStage, description?: IDoodadDescription): Translation | undefined;
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
    legendary?: IItemLegendary | undefined;
    step: number | undefined;
    hitchedCreature?: number;
    private _description;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(type?: DoodadType, x?: number, y?: number, z?: number, options?: IDoodadOptions);
    getRegistrarId(): number;
    getName(article?: boolean, count?: number): Translation;
    description(): IDoodadDescription | undefined;
    inspect({ context, inspectFire }: Inspection, section: InspectionSection): void;
    changeType(doodadType: DoodadType): void;
    isValid(): boolean;
    getTile(): ITile;
    canGrow(): boolean;
    getGrowingStage(): GrowingStage | undefined;
    setGrowingStage(stage: GrowingStage, updateTile?: boolean): void;
    canPickup(human: Human): boolean;
    getPickupTypes(): ItemType[] | undefined;
    getActions(): ActionType[] | undefined;
    canGather(): boolean;
    isGatherable(): boolean;
    isEmbers(): boolean;
    getDoodadInfo(): DoodadInfo | undefined;
    canHarvest(): boolean;
    canTrample(): boolean | undefined;
    checkForTrampling(source: Human | ICreature): boolean;
    isDangerous(player: IPlayer): boolean;
    getDamage(human: Human, equipType?: EquipType): number;
    getOwner(): IPlayer | undefined;
    damage(forceBreak?: boolean, skipDropAsItem?: boolean, skipSound?: boolean, skipResources?: boolean): void;
    getDefaultDurability(): number;
    addTreasureChestLoot(): void;
    blocksMove(): boolean;
    update(): void;
    canCauseStatus(human: Human, equipType?: EquipType): boolean;
    causeStatus(human: Human, equipType?: EquipType): void;
    setOffTrap(human?: Human, withMessage?: boolean): void;
    getGrowthParticles(): IRGB | undefined;
    increaseFertility(): boolean;
    onUnserialized(): void;
    protected getNameTranslation(article?: boolean, count?: number): Translation;
    protected getDescriptionTranslation(): Translation;
    private inspectGrowth;
    private inspectFertility;
    private inspectDurability;
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
    private processRegeneration;
    /**
     * Decay over time
     */
    private processDecay;
}
declare module Doodad {
    function is(value: any): value is IDoodad;
}
export default Doodad;
