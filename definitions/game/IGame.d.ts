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
import { IPlayer, TurnType } from "entity/player/IPlayer";
import EventEmitter from "event/EventEmitter";
import { Difficulty, IDifficultyOptions } from "game/Difficulty";
import { Quality } from "game/IObject";
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
    addPlayer(playerOptions?: Partial<IPlayerOptions>): IPlayer;
    addZoomLevel(amount: number): void;
    animateSkeletalRemains(player: IPlayer, x: number, y: number, z: number): void;
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, nondeterministic?: boolean): boolean;
    changeTile(newTileInfo: TerrainType | ITileData, x: number, y: number, z: number, stackTiles: boolean, dropTiles?: boolean, skipCaveDirt?: boolean): void;
    checkForHiddenMob(human: Human, x: number, y: number, z: number): void;
    checkWaterFill(x: number, y: number, z: number, needed: number): void;
    consumeWaterTile(x: number, y: number, z: number): void;
    damage(target: IPlayer | ICreature | Human, damageInfo: IDamageInfo, causesBlood?: boolean): number | undefined;
    deletePlayer(plys: IPlayer[], identifier: string): void;
    directionToMovement(direction: Direction): IVector2;
    doLavaEvents(x: number, y: number, z: number): void;
    enableFlowFieldDebug(): void;
    fireBreath(x: number, y: number, z: number, facingDirection: Direction, itemName?: Translation, player?: boolean): void;
    getAmbientLightLevel(z: number): number;
    getBenignity(): number;
    getBlackness(): number;
    getCameraPosition(): IVector2;
    getCompletedMilestoneCount(): number;
    getDailyChallengeSeed(): number;
    getDifficulty(): Difficulty;
    getDifficultyOptions(): IDifficultyOptions;
    getExactCameraPosition(): Vector2;
    getFireStage(decay: number): FireStage;
    getHeight(z0: number, z1: number, d: number): number;
    getLightSourceAt(x: number, y: number, z: number): number;
    getMalignity(): number;
    getMaxHealth(): number;
    getMaxWeight(): number;
    getMovementFinishTime(): number;
    getNearestPlayer(x: number, y: number, z?: number): IPlayer | undefined;
    getOrCreateTile(x: number, y: number, z: number): ITile;
    getOrCreateTileData(x: number, y: number, z: number): ITileData[];
    getPlayerByIdentifier(identifier: string, includeAbsent?: boolean): IPlayer | undefined;
    getPlayerByName(name: string): IPlayer | undefined;
    getPlayerByPid(pid: number): IPlayer | undefined;
    getPlayers(includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersAtPosition(position: IVector3, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersThatSeePosition(tileX: number, tileY: number, tileZ: number): IPlayer[];
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
    makeCaveEntrance(player: IPlayer): TerrainType | undefined;
    makeLavaPassage(player: IPlayer): TerrainType | undefined;
    makeMiniMap(mapRequest: IMapRequest): HTMLCanvasElement;
    onGlobalSlotLoaded(_: number, success: boolean): void;
    onSaveLoaded(slot: number): void;
    packGround(x: number, y: number, z: number): void;
    passTurn(player: IPlayer, turnType?: TurnType): void;
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
    synchronizeFlowFields(plys: IPlayer[]): void;
    tickRealtime(): void;
    updateFlowFieldTile(tile: ITile, x: number, y: number, z: number, tileUpdateType: TileUpdateType): void;
    updateOption(player: IPlayer | undefined, id: keyof IOptions, value: boolean | number): void;
    updateRender(source: RenderSource): void;
    updateReputation(reputation: number): void;
    updateTablesAndWeight(): void;
    updateThumbnail(): Promise<void>;
    updateView(source: RenderSource, updateFov: boolean): void;
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
    difficulty: Difficulty;
    difficultyOptions?: IDifficultyOptions;
    character: ICharacter;
    multiplayer: IMultiplayerOptions | true | undefined;
    multiplayerServerToJoin: ServerInfo | undefined;
    turnMode: TurnMode;
    realTimeTickSpeed: number;
    multiplayerWorld?: IMultiplayerWorldData;
}
export interface IPlayerOptions {
    id?: number;
    identifier?: string;
    options?: IOptions;
    position?: IVector3;
    character: ICharacter;
    completedMilestones?: number;
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
    FadeIn = 1,
    FovTransition = 2,
    FovUpdate = 3,
    GamePassTurn = 4,
    GameTick = 5,
    HiddenMob = 6,
    ItemEquip = 7,
    ItemEquipEffect = 8,
    ItemUnequip = 9,
    Mod = 10,
    MovementCreature = 11,
    MovementNPC = 12,
    MovementPlayerPost = 13,
    MovementPlayerPre = 14,
    MovementPlayerZPost = 15,
    MovementPlayerZPre = 16,
    MovementTileEvent = 17,
    MultiplayerDisconnect = 18,
    OptionHeadgear = 19,
    OptionVisionMode = 20,
    OptionZoomLevel = 21,
    PlayerAdd = 22,
    PlayerKill = 23,
    PlayerReady = 24,
    PlayerRemove = 25,
    PlayerRest = 26,
    PlayerRestStart = 27,
    PlayerRestStop = 28,
    PlayerWalkToTilePath = 29,
    PlayerWalkToTilePathOverburdened = 30,
    PlayerWalkToTilePathPreview = 31,
    PlayerWalkToTilePathReset = 32,
    RemoveBlood = 33,
    Resize = 34,
    SetupGl = 35,
    StartGame = 36,
    WorldLayerRendererFlush = 37
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
export declare const lineOfSightRadius = 15;
export declare const lineOfSightMaxRadius = 20;
export declare const lineOfSightDetail = 4;
export declare const interval = 16.6666;
export declare const maximumTurnDelay: number;
export declare const defaultTurnDelay: number;
