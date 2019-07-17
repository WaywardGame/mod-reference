/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { SfxType } from "audio/IAudio";
import Doodad from "doodad/Doodad";
import { DoodadType, GrowingStage } from "doodad/IDoodad";
import { ICorpse } from "entity/creature/corpse/ICorpse";
import Creature from "entity/creature/Creature";
import { SkillType } from "entity/IHuman";
import NPC from "entity/npc/NPC";
import { Quality } from "game/IObject";
import { IContainer } from "item/IItem";
import { IModdable } from "mod/ModRegistry";
import { ITileEvent } from "tile/ITileEvent";
import { IRGB } from "utilities/Color";
import { IVector3 } from "utilities/math/IVector";
export interface ITerrainDescription extends IModdable {
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
    gatherSkillUse?: SkillType;
    sound?: SfxType;
    leftOver?: TerrainType;
    baseTerrain?: TerrainType;
    terrainType?: TerrainType;
    doodad?: DoodadType;
    isMountain?: boolean;
    background?: TerrainType;
    noBackground?: boolean;
    isOre?: boolean;
    animated?: boolean;
    tillable?: boolean;
    hasMound?: boolean;
    deepWater?: boolean;
    reduceRest?: boolean;
    noResting?: boolean;
    wet?: boolean;
    tileOnConsume?: TerrainType;
    isMountainGround?: boolean;
}
export interface ITile extends Partial<ITileContainer> {
    corpses?: ICorpse[];
    creature?: Creature;
    data: number;
    doodad?: Doodad;
    events?: ITileEvent[];
    npc?: NPC;
    overlays?: IOverlayInfo[];
}
export interface ITileOld {
    event?: ITileEvent[];
}
export interface ITileArray {
    [index: number]: ITile;
}
export declare type ITileContainer = IContainer & IVector3;
export interface ITileData {
    type: TerrainType;
    minDur?: number;
    maxDur?: number;
    quality?: Quality;
    gfx?: number;
    tilled?: boolean;
    step?: number;
}
export declare type ITileDataOld = Partial<ITileData> & {
    strength?: number;
};
export declare enum TileTemplateType {
    House = 0,
    Pond = 1,
    CavePond = 2,
    Desert = 3,
    Beach = 4,
    Boat = 5,
    Lava = 6
}
export interface ITemplate {
    terrainTypes: {
        [id: string]: TerrainType;
    };
    terrain: string[];
    doodadTypes?: {
        [id: string]: DoodadType | ITemplateDoodad;
    };
    doodad?: string[];
    tilled?: boolean;
    /**
     * A decimal value, 0 for no degradation, 1 for 100% degradation (basically as if there was no template)
     */
    degrade: number;
}
export interface ITemplateDoodad {
    type: DoodadType;
    growingStages: GrowingStage[];
}
export interface IOverlayInfo {
    type: OverlayType;
    size?: number;
    offsetX?: number;
    offsetY?: number;
    spriteOffsetX?: number;
    spriteOffsetY?: number;
    red?: number;
    green?: number;
    blue?: number;
    alpha?: number;
}
export declare enum OverlayType {
    WalkDots = 0,
    Arrows = 1,
    FootPrints = 2
}
export declare enum TerrainType {
    DeepSeawater = 0,
    Seawater = 1,
    ShallowSeawater = 2,
    DeepFreshWater = 3,
    FreshWater = 4,
    ShallowFreshWater = 5,
    Grass = 6,
    Gravel = 7,
    Dirt = 8,
    BeachSand = 9,
    Snow = 10,
    Swamp = 11,
    Clay = 12,
    Ash = 13,
    Rocks = 14,
    RocksWithIron = 15,
    RocksWithTalc = 16,
    RocksWithCoal = 17,
    RocksWithLimestone = 18,
    CobblestoneFlooring = 19,
    Sandstone = 20,
    SandstoneFlooring = 21,
    SandstoneWithIron = 22,
    SandstoneWithNiter = 23,
    WoodenFlooring = 24,
    ClayBrickFlooring = 25,
    CaveEntrance = 26,
    RedCarpet = 27,
    Lava = 28,
    FertileSoil = 29,
    RocksWithCopper = 30,
    SandstoneWithCopper = 31,
    CoolingLava = 32,
    Obsidian = 33,
    DesertSand = 34,
    RockGround = 35,
    SandstoneGround = 36
}
