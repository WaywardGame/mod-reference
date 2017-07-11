import { ICorpse } from "creature/corpse/ICorpse";
import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { DoodadType, IModdable, IPointZ, IRGB, ItemQuality, SfxType, SkillType, TerrainType } from "Enums";
import { IContainer } from "item/IItem";
import { ITileEvent } from "tile/ITileEvent";
export interface ITerrainDescription extends IModdable {
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
    isOre?: boolean;
    suffix?: string;
    prefix?: string;
    animated?: boolean;
    tillable?: boolean;
    hasMound?: boolean;
}
export interface ITile extends Partial<ITileContainer> {
    creature?: ICreature;
    doodad?: IDoodad;
    corpses?: ICorpse[];
    events?: ITileEvent[];
    data: number;
}
export interface ITileOld {
    event?: ITileEvent[];
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
