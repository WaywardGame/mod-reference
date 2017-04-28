import { DoodadType, DoodadTypeGroup, DoorOrientation, IPointZ, IRGB, ItemType, StatusType, TerrainType } from "Enums";
import { IContainer, IObject, IObjectDescription } from "item/IItem";
export interface IDoodad extends IObject, IPointZ, Partial<IContainer> {
    type: DoodadType;
    spread?: number;
    growInto?: DoodadType;
    gatherReady?: boolean;
    torch?: any;
    weight?: number;
    treasure?: boolean;
}
export interface IGroupDescription {
    name: string;
    prefix?: string;
    suffix?: string;
}
export interface IDoodadDoor extends IDoodad {
    orientation: DoorOrientation;
}
export interface IDoodadDescription extends IObjectDescription {
    allowedTiles?: TerrainType[];
    animated?: boolean;
    blockDig?: boolean;
    blockJump?: boolean;
    blockMove?: boolean;
    canPickupWithoutTool?: boolean;
    caveGrow?: boolean;
    damage?: number;
    fire?: boolean;
    flammable?: boolean;
    garden?: boolean;
    graphicVariation?: boolean;
    growing?: boolean;
    growth?: DoodadType;
    isLocked?: boolean;
    lit?: DoodadType;
    mod?: number;
    onBurn?: ItemType;
    resource?: IDoodadResource[];
    revert?: DoodadType;
    spreadMax?: number;
    tall?: boolean;
    trample?: boolean;
    trap?: boolean;
    variation?: boolean;
    waterSource?: boolean;
    causesStatus?: StatusType[];
    repairable?: boolean;
    stokable?: boolean;
    particles: IRGB;
    lightSource?: number;
    group?: DoodadTypeGroup;
    waterStill?: boolean;
    reduceDurabilityOnGather?: boolean;
    trapDamage?: number;
    disableDrop?: boolean;
}
export interface IDoodadResource {
    item: ItemType;
    chance?: number;
}
