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
import { IDoodad } from "doodad/IDoodad";
import { ICorpse } from "entity/creature/corpse/ICorpse";
import { ICreature, IDamageInfo } from "entity/creature/ICreature";
import { ICharacter, ICrafted, SkillType } from "entity/IHuman";
import { INPC } from "entity/npc/INPC";
import { TurnType } from "entity/player/IPlayer";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import { GameMode, IGameOptions } from "game/GameMode";
import { Quality } from "game/IObject";
import { Milestone } from "game/milestones/IMilestone";
import TimeManager from "game/TimeManager";
import { IItem } from "item/IItem";
import Translation from "language/Translation";
import { IMultiplayerOptions, IMultiplayerWorldData, ServerInfo } from "multiplayer/IMultiplayer";
import { INotifier } from "renderer/INotifier";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { IParticle } from "renderer/particle/IParticle";
import { IHighscoreOld, IOptions } from "save/data/ISaveDataGlobal";
import { ISaveInfo } from "save/ISaveManager";
import { ITile, ITileArray, ITileContainer, ITileData, TerrainType } from "tile/ITerrain";
import { ITileEvent } from "tile/ITileEvent";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
import { default as Vec2, default as Vector2 } from "utilities/math/Vector2";
import Vector3 from "utilities/math/Vector3";
import { IVersionInfo } from "utilities/Version";
export interface IGame extends EventEmitter.Host<IGameEvents> {
    interval: number;
    mapSize: number;
    mapSizeSq: number;
    slot: number;
    version: string;
    npcs: SaferArray<INPC>;
    mapGenVersion: string;
    saveVersion: string | undefined;
    isLoadingSave: boolean;
    tile: ITileArray;
    tileDecorations: Uint16Array;
    tileData: {
        [index: number]: {
            [index: number]: {
                [index: number]: ITileData[] | undefined;
            } | undefined;
        } | undefined;
    };
    wellData: {
        [index: number]: IWell | undefined;
    };
    tileContainers: ITileContainer[];
    items: IItem[];
    creatures: SaferArray<ICreature>;
    doodads: SaferArray<IDoodad>;
    tileEvents: SaferArray<ITileEvent>;
    corpses: SaferArray<ICorpse>;
    creatureSpawnTimer: number;
    saveClear: boolean;
    playing: boolean;
    paused: boolean;
    autoSaveTimer: number;
    fillCount: number;
    fillTile: boolean[][];
    spawnCoords: IVector3;
    contaminatedWater: IVector3[];
    fadeInAmount: number | undefined;
    time: TimeManager;
    absoluteTime: number;
    lastCreationIds: {
        [index: number]: number;
    };
    previousSaveVersion: IVersionInfo;
    worldId: string;
    customMilestoneModifiersAllowed: boolean;
    tickSpeed: number;
    seeds: ISeeds;
    visible: boolean;
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
    particle: IParticle;
    debugRenderer: ITextureDebugRenderer;
    notifier: INotifier;
    cartographyTexture: WebGLTexture;
    readonly isChallenge: boolean;
    addPlayer(playerOptions?: Partial<IPlayerOptions>): Player;
    addZoomLevel(amount: number): void;
    animateSkeletalRemains(player: Player, x: number, y: number, z: number): void;
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, nondeterministic?: boolean): boolean;
    changeTile(newTileInfo: TerrainType | ITileData, x: number, y: number, z: number, stackTiles: boolean, dropTiles?: boolean, skipCaveDirt?: boolean): void;
    checkForHiddenMob(human: Human, x: number, y: number, z: number): void;
    checkWaterFill(x: number, y: number, z: number, needed: number): void;
    consumeWaterTile(x: number, y: number, z: number): void;
    damage(target: Player | ICreature | Human, damageInfo: IDamageInfo, causesBlood?: boolean): number | undefined;
    deletePlayer(plys: Player[], identifier: string): void;
    directionToMovement(direction: Direction): IVector2;
    doLavaEvents(x: number, y: number, z: number): void;
    enableFlowFieldDebug(): void;
    fireBreath(x: number, y: number, z: number, facingDirection: Direction, itemName?: Translation, player?: boolean): void;
    getAmbientLightLevel(z: number): number;
    getBenignity(): number;
    getBlackness(): number;
    getCameraPosition(): IVector2;
    getDailyChallengeSeed(): number;
    getDifficulty(): GameMode;
    getDifficultyOptions(): IGameOptions;
    getExactCameraPosition(): Vector2;
    getFireStage(decay: number): FireStage;
    getHeight(z0: number, z1: number, d: number): number;
    getLightSourceAt(x: number, y: number, z: number): number;
    getMalignity(): number;
    getMaxHealth(): number;
    getMaxWeight(): number;
    getMovementFinishTime(): number;
    getNearestPlayer(x: number, y: number, z?: number): Player | undefined;
    getOrCreateTile(x: number, y: number, z: number): ITile;
    getOrCreateTileData(x: number, y: number, z: number): ITileData[];
    getPlayerByIdentifier(identifier: string, includeAbsent?: boolean): Player | undefined;
    getPlayerByName(name: string): Player | undefined;
    getPlayerByPid(pid: number): Player | undefined;
    getPlayers(includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersAtPosition(position: IVector3, includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersThatSeePosition(tileX: number, tileY: number, tileZ: number): Player[];
    getQualityDurabilityBonus(quality: Quality, itemDurability: number): number;
    getRandomQuality(bonusQuality?: number): Quality;
    getReputation(): number;
    getSkillPercent(skill: SkillType): number;
    getTactics(): number;
    getTickSpeed(): number;
    getTile(x: number, y: number, z: number): ITile;
    getTileData(x: number, y: number, z: number): ITileData[] | undefined;
    getTileFromPoint(point: IVector3): ITile;
    getTileUnsafe(x: number, y: number, z: number): ITile;
    getTurnMode(): TurnMode;
    getValidPlayerName(name: string | undefined): string;
    getWrappedCoord(x: number): number;
    initGl(): Promise<void>;
    initialize(): void;
    isFlammable(x: number, y: number, z: number): boolean;
    isOnFire(tile: ITile): FireType;
    isPlayerAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    isPlayerAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    isPositionEmpty(x: number, y: number, z: number): boolean;
    isPositionFull(x: number, y: number, z: number): boolean;
    isRealTimeMode(): boolean;
    isTileEmpty(tile: ITile): boolean;
    isTileFull(tile: ITile): boolean;
    makeCaveEntrance(player: Player): TerrainType | undefined;
    makeLavaPassage(player: Player): TerrainType | undefined;
    makeMiniMap(mapRequest: IMapRequest): HTMLCanvasElement;
    onGlobalSlotLoaded(_: number, success: boolean): void;
    onSaveLoaded(slot: number): void;
    packGround(x: number, y: number, z: number): void;
    passTurn(player: Player, turnType?: TurnType): void;
    play(options: Partial<IPlayOptions>): Promise<boolean>;
    processWaterContamination(): void;
    rangeFinder(weaponRange: number, playerSkillLevel: number): number;
    removePlayer(pid: number): void;
    requestPlay(options: Partial<IPlayOptions> & {
        slot: number;
    }): Promise<boolean>;
    resetGameState(skipSave?: boolean): Promise<void>;
    resetWebGL(): void;
    resizeRenderer(): void;
    restartDedicatedServer(): void;
    saveGame(saveType: SaveType): Promise<ISaveInfo | undefined>;
    setGlContextSize(width: number, height: number): void;
    setPaused(paused: boolean, showChatMessage?: boolean): void;
    setTickSpeed(tickSpeed: number): void;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    setTurnMode(turnMode: TurnMode): void;
    setupSave(_: number): void;
    shouldRender(): number;
    synchronizeFlowFields(plys: Player[]): void;
    tickRealtime(): void;
    updateFlowFieldTile(tile: ITile, x: number, y: number, z: number, tileUpdateType: TileUpdateType): void;
    updateOption(player: Player | undefined, id: keyof IOptions, value: boolean | number): void;
    updateRender(source: RenderSource): void;
    updateReputation(reputation: number): void;
    updateTablesAndWeight(): void;
    updateThumbnail(): Promise<void>;
    updateView(source: RenderSource, updateFov: boolean): void;
    updateFieldOfView(source: RenderSource, force?: boolean): void;
    updateZoomLevel(): void;
    wrapCoordinate(cordinate: number, reference: number): number;
}
export default IGame;
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
export declare type IGameOld = Partial<IGame> & {
    dayNight: number;
    dayNightSwitch: 0 | 1;
    monsters: ICreature[];
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
}
export interface IMapRequest {
    /**
     * The item containing the map.
     */
    item: IItem;
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
export declare const LINE_OF_SIGHT_RADIUS = 15;
export declare const LINE_OF_SIGHT_RADIUS_MAX = 20;
export declare const LINE_OF_SIGHT_DETAIL = 4;
export declare const INTERVAL = 16.6666;
export declare const TURN_DELAY_MAX: number;
export declare const TURN_DELAY_DEFAULT: number;
export declare const LIGHT_COLOR_DEFAULT: import("../utilities/Color").IRGB;
