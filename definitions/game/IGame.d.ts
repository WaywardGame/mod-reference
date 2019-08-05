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
import Creature from "entity/creature/Creature";
import { ICharacter, ICrafted } from "entity/IHuman";
import Game from "game/Game";
import { Milestone } from "game/milestones/IMilestone";
import { GameMode, IGameOptions } from "game/options/IGameOptions";
import Item from "item/Item";
import { IMultiplayerOptions, IMultiplayerWorldData, ServerInfo } from "multiplayer/IMultiplayer";
import { IHighscoreOld, IOptions } from "save/data/ISaveDataGlobal";
import { IVector3 } from "utilities/math/IVector";
import Vector3 from "utilities/math/Vector3";
export interface IGameEvents {
    globalSlotLoaded(): any;
    pause(): any;
    resume(): any;
    play(): any;
    tickStart(): any;
    tickEnd(): any;
}
export declare enum TickSpeed {
    Min = 10,
    Default = 50,
    Max = 80
}
export declare enum TurnMode {
    Manual = 0,
    Simulated = 1,
    RealTime = 2
}
export declare type IGameOld = Partial<Game> & {
    dayNight: number;
    dayNightSwitch: 0 | 1;
    monsters: Creature[];
    tamedCreatures: number[];
    options: IOptions;
    lastPlayedVersion: string | undefined;
    highscores: IHighscoreOld[];
    playedCount: number;
    dailyChallenge: boolean;
    isRealTime: boolean;
    realTimeTickSpeed: TickSpeed;
    crafted: {
        [index: number]: ICrafted;
    };
};
export interface IPlayOptions {
    slot: number | undefined;
    name: string;
    seed: string | number | undefined;
    difficulty: GameMode;
    difficultyOptions?: IGameOptions;
    milestoneModifiers: Set<Milestone>;
    character: ICharacter;
    multiplayer: IMultiplayerOptions | true | undefined;
    multiplayerServerToJoin: ServerInfo | undefined;
    turnMode: TurnMode;
    realTimeTickSpeed: number;
    customMilestoneModifiersAllowed: boolean;
    mapSize: number | undefined;
    multiplayerWorld?: IMultiplayerWorldData;
}
export interface IPlayerOptions {
    id?: number;
    identifier?: string;
    options?: IOptions;
    position?: IVector3;
    character: ICharacter;
    crafted?: {
        [index: number]: ICrafted;
    };
    milestoneModifiers?: Set<Milestone>;
}
export interface IMapRequest {
    /**
     * The item containing the map.
     */
    item: Item;
    /**
     * The tile position of the top-left corner of the map.
     */
    tilePosition: Vector3;
    /**
     * Whether to involve your skill in how "readable" the map is. Defaults to false.
     */
    skillCheck?: boolean;
}
export interface IWell {
    quantity: number;
    waterType: WaterType;
}
export declare enum WaterType {
    None = 0,
    FreshWater = 1,
    Seawater = 2
}
export declare enum FireStage {
    Embers = 0,
    AlmostExtinguished = 1,
    Struggling = 2,
    Healthy = 3,
    Raging = 4
}
export declare enum RenderSource {
    ActionManager = 0,
    AmbientLightLevelUpdate = 1,
    FadeIn = 2,
    FovTransition = 3,
    FovUpdate = 4,
    GamePassTurn = 5,
    GameTick = 6,
    HiddenMob = 7,
    ItemEquip = 8,
    ItemEquipEffect = 9,
    ItemUnequip = 10,
    Mod = 11,
    MovementCreature = 12,
    MovementNPC = 13,
    MovementPlayerPost = 14,
    MovementPlayerPre = 15,
    MovementPlayerZPost = 16,
    MovementPlayerZPre = 17,
    MovementTileEvent = 18,
    MultiplayerDisconnect = 19,
    OptionHeadgear = 20,
    OptionVisionMode = 21,
    OptionZoomLevel = 22,
    PlayerAdd = 23,
    PlayerKill = 24,
    PlayerProcessMovement = 25,
    PlayerReady = 26,
    PlayerRemove = 27,
    PlayerRest = 28,
    PlayerRestStart = 29,
    PlayerRestStop = 30,
    PlayerWalkToTilePath = 31,
    PlayerWalkToTilePathOverburdened = 32,
    PlayerWalkToTilePathPreview = 33,
    PlayerWalkToTilePathReset = 34,
    RemoveBlood = 35,
    Resize = 36,
    SetupGl = 37,
    StartGame = 38,
    WorldLayerRendererFlush = 39
}
export declare enum FireType {
    None = 0,
    Doodad = 1,
    Fire = 2,
    Lava = 3,
    CoolingLava = 4
}
export interface ISeeds {
    base: number | string;
    saved: number;
}
export declare enum SaveType {
    InGame = 0,
    Death = 1,
    Quit = 2,
    BackToMainMenu = 3,
    Multiplayer = 4,
    Challenge = 5
}
export declare enum TileUpdateType {
    Player = 0,
    Doodad = 1,
    Creature = 2,
    Item = 3,
    NPC = 4,
    TileEvent = 5,
    Tilled = 6,
    Terrain = 7,
    Corpse = 8
}
export declare const DEFAULT_MAP_SIZE = 512;
export declare const LINE_OF_SIGHT_RADIUS = 15;
export declare const LINE_OF_SIGHT_RADIUS_MAX = 20;
export declare const LINE_OF_SIGHT_DETAIL = 4;
export declare const INTERVAL = 16.6666;
export declare const TURN_DELAY_MAX: number;
export declare const TURN_DELAY_DEFAULT: number;
export declare const LIGHT_COLOR_DEFAULT: import("../utilities/Color").IRGB;
export declare const TOOLTIP_DELAY_DEFAULT = 170;
