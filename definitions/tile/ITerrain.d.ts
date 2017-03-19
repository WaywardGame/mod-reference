import { DoodadType, IPointZ, IRGB, ItemQuality, ItemType, SfxType, SkillType, TerrainType } from "Enums";
import { IContainer } from "item/IItem";
export interface ITerrainDescription {
    name?: string;
    passable?: boolean;
    particles: IRGB;
    durability?: number;
    water?: boolean;
    regathered?: boolean;
    shallowWater?: boolean;
    freshWater?: boolean;
    gather?: boolean;
    noGfxSwitch?: boolean;
    noLos?: boolean;
    flammable?: boolean;
    skill?: SkillType;
    sound?: SfxType;
    strength?: number;
    leftOver?: TerrainType;
    terrainType?: TerrainType;
    doodad?: DoodadType;
    isMountain?: boolean;
    background?: TerrainType;
    noBackground?: boolean;
    mod?: number;
    isOre?: boolean;
    suffix?: string;
    prefix?: string;
    animated?: boolean;
    tillable?: boolean;
}
export interface ITile {
    creatureId?: number;
    doodadId?: number;
    corpseIds?: number[];
    eventId?: number;
    data: number;
}
export interface ITileArray {
    [index: number]: ITile;
}
export declare type ITileContainer = IContainer & IPointZ;
export interface ITileData {
    type: TerrainType;
    strength?: number;
    minDur?: number;
    maxDur?: number;
    quality?: ItemQuality;
    gfx?: number;
    tilled?: boolean;
}
export interface ITerrainResource {
    items: ITerrainResourceItem[];
    defaultItem?: ItemType;
}
export interface ITerrainResourceItem {
    type: ItemType;
    chance: number;
    chanceOutOf?: number;
    tileChange?: TerrainType;
    tileChangeChance?: number;
}
export declare enum TileTemplateType {
    House = 0,
    Pond = 1,
    CavePond = 2,
    Desert = 3,
    Beach = 4,
    Boat = 5,
    Lava = 6,
}
export interface ITemplate {
    terrainTypes: {
        [id: string]: TerrainType;
    };
    terrain: string[];
    doodadTypes?: {
        [id: string]: DoodadType;
    };
    doodad?: string[];
    degrade: number;
}
