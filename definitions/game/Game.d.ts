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
import Doodad from "doodad/Doodad";
import { ICorpse } from "entity/creature/corpse/ICorpse";
import Creature from "entity/creature/Creature";
import { IDamageInfo } from "entity/creature/ICreature";
import Human from "entity/Human";
import { SkillType } from "entity/IHuman";
import NPC from "entity/npc/NPC";
import { TurnType } from "entity/player/IPlayer";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import { FireStage, FireType, IGameEvents, IMapRequest, IPlayerOptions, IPlayOptions, ISeeds, IWell, RenderSource, SaveType, TileUpdateType, TurnMode } from "game/IGame";
import { Quality } from "game/IObject";
import { Milestone } from "game/milestones/IMilestone";
import { GameMode, IGameOptions } from "game/options/IGameOptions";
import { ChallengeModifiersCollection } from "game/options/modifiers/challenge/ChallengeModifiers";
import TimeManager from "game/TimeManager";
import Item from "item/Item";
import Translation from "language/Translation";
import { INotifier } from "renderer/INotifier";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { IParticle } from "renderer/particle/IParticle";
import { IOptions } from "save/data/ISaveDataGlobal";
import { ISaveInfo } from "save/ISaveManager";
import { ITile, ITileArray, ITileContainer, ITileData, TerrainType } from "tile/ITerrain";
import { ITileEvent } from "tile/ITileEvent";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
import { IVersionInfo } from "utilities/Version";
export default class Game extends EventEmitter.Host<IGameEvents> {
    readonly interval = 16.6666;
    slot: number;
    previousSaveVersion: IVersionInfo;
    absoluteTime: number;
    autoSaveTimer: number;
    fadeInAmount: number | undefined;
    fillCount: number;
    fillTile: boolean[][];
    isLoadingSave: boolean;
    paused: boolean;
    playing: boolean;
    nextTickTime: number | undefined;
    lastTickTime: number | undefined;
    saveClear: boolean;
    spawnCoords: IVector3;
    tile: ITileArray;
    tileDecorations: Uint16Array;
    _updateFieldOfView: boolean;
    _updateFieldOfViewForced: boolean;
    mapSize: number;
    mapSizeSq: number;
    contaminatedWater: IVector3[];
    corpses: SaferArray<ICorpse>;
    creatures: SaferArray<Creature>;
    creatureSpawnTimer: number;
    difficulty: GameMode;
    customMilestoneModifiersAllowed: boolean;
    doodads: SaferArray<Doodad>;
    flowFieldSyncCount: number;
    items: Item[];
    lastCreationIds: {
        [index: number]: number;
    };
    mapGenVersion: string;
    npcs: SaferArray<NPC>;
    turnMode: TurnMode;
    tickSpeed: number;
    saveVersion: string;
    seeds: ISeeds;
    shouldUpdateTablesAndWeight: boolean;
    tileContainers: ITileContainer[];
    tileData: {
        [index: number]: {
            [index: number]: {
                [index: number]: ITileData[];
            };
        };
    };
    wellData: {
        [index: number]: IWell | undefined;
    };
    tileEvents: SaferArray<ITileEvent>;
    time: TimeManager;
    version: string;
    worldId: string;
    readonly milestonesCollection: import("./options/modifiers/GameplayModifiersManager").GameplayModifiersCollection<Milestone, import("./options/modifiers/milestone/MilestoneModifier").default>;
    challengeCollection?: ChallengeModifiersCollection;
    cartographyTexture: WebGLTexture;
    debugRenderer: ITextureDebugRenderer;
    glContext: WebGL2RenderingContext | null;
    glVersion: number;
    notifier: INotifier;
    particle: IParticle;
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vector2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vector2;
    visible: boolean;
    private _updateRender;
    private gameCanvas;
    private thumbnailResolve?;
    private simulateInterval?;
    private renderingEnabled;
    private difficultyOptions;
    private gameOptionsCached?;
    private playOptions;
    private ambientLightLevelCache;
    readonly isChallenge: boolean;
    updateRender: (source: RenderSource) => void;
    initialize(): void;
    initGl(): Promise<void>;
    setupGl(restoring: boolean): Promise<void>;
    resetWebGL(): void;
    setGlContextSize(width: number, height: number): void;
    resizeRenderer(): void;
    checkWaterFill(x: number, y: number, z: number, needed: number): void;
    getDailyChallengeSeed(): number;
    consumeWaterTile(x: number, y: number, z: number): void;
    checkForHiddenMob(human: Human, x: number, y: number, z: number): void;
    animateSkeletalRemains(player: Player, x: number, y: number, z: number): void;
    getWrappedCoord(x: number): number;
    getTileFromPoint(point: IVector3): ITile;
    getTile(x: number, y: number, z: number): ITile;
    getTileUnsafe(x: number, y: number, z: number): ITile;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    getOrCreateTile(x: number, y: number, z: number): ITile;
    setPaused(paused: boolean, showChatMessage?: boolean): void;
    gameLoop: (timeStamp: number) => void;
    saveGame(saveType: SaveType): Promise<ISaveInfo | undefined>;
    updateThumbnail(): Promise<void>;
    addZoomLevel(amount: number): void;
    updateZoomLevel(): void;
    requestPlay(options: Partial<IPlayOptions> & {
        slot: number;
    }): Promise<boolean>;
    play(options: Partial<IPlayOptions>): Promise<boolean>;
    setLocalPlayer(player: Player): void;
    addPlayer(playerOptions?: Partial<IPlayerOptions>): Player;
    removePlayer(pid: number): void;
    deletePlayer(plys: Player[], identifier: string): void;
    isRealTimeMode(): boolean;
    getTurnMode(): TurnMode;
    setTurnMode(turnMode: TurnMode): void;
    getTickSpeed(): number;
    setTickSpeed(tickSpeed: number): void;
    synchronizeFlowFields(plys: Player[]): void;
    enableFlowFieldDebug(): void;
    resetGameState(skipSave?: boolean): Promise<void>;
    shouldRender(): number;
    makeLavaPassage(player: Player): TerrainType | undefined;
    makeCaveEntrance(player: Player): TerrainType | undefined;
    getTileData(x: number, y: number, z: number): ITileData[] | undefined;
    getOrCreateTileData(x: number, y: number, z: number): ITileData[];
    updateTablesAndWeightNextTick(): void;
    makeMiniMap(mapRequest: IMapRequest): HTMLCanvasElement;
    getBlackness(): number;
    /**
     * Note: Don't inject here. This gets called ten million times. If you want to override this functionality,
     * use `calculateAmbientLightLevel`
     */
    getAmbientLightLevel(z: number): number;
    updateAmbientLightLevel(z: number): number;
    calculateAmbientLightLevel(z: number): number;
    updateReputation(reputation: number): void;
    getGameMode(): GameMode;
    getGameOptionsBeforeModifiers(): IGameOptions;
    getGameOptions(): IGameOptions;
    getReputation(): number;
    getMalignity(): number;
    getBenignity(): number;
    getMaxHealth(): number;
    getMaxWeight(): number;
    getTactics(): number;
    getSkillPercent(skill: SkillType): number;
    getPlayerAverage(calc: (player: Player) => number | undefined, round?: boolean): number;
    changeTile(newTileInfo: TerrainType | ITileData, x: number, y: number, z: number, stackTiles: boolean, dropTiles?: boolean, skipCaveDirt?: boolean): void;
    isPositionFull(x: number, y: number, z: number): boolean;
    isTileFull(tile: ITile): boolean;
    isOnFire(tile: ITile): FireType;
    isTileEmpty(tile: ITile): boolean;
    isPositionEmpty(x: number, y: number, z: number): boolean;
    processWaterContamination(): void;
    getMovementFinishTime(): number;
    passTurn(player: Player, turnType?: TurnType): void;
    tickRealtime(): void;
    updateView(updateFov: boolean): void;
    updateView(source: RenderSource, updateFov: boolean): void;
    updateFieldOfView(source: RenderSource, force?: boolean): void;
    updateRenderInternal(source: RenderSource, fromUpdateView?: boolean): void;
    /**
     * AVOID USING THIS. USE updateTablesAndWeightNextTick INSTEAD!
     * For most cases you don't need this
     */
    updateTablesAndWeight(): void;
    rangeFinder(weaponRange: number, playerSkillLevel: number): number;
    damage(target: Human | Creature, damageInfo: IDamageInfo, causesBlood?: boolean): number | undefined;
    getPlayers(includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    isPlayerAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    isPlayerAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    getPlayersAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersAtPosition(position: IVector3, includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): Player[];
    getPlayersThatSeePosition(x: number, y: number, z: number): Player[];
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, nondeterministic?: boolean): boolean;
    getNearestPlayer(x: number, y: number, z?: number): Player | undefined;
    getPlayerByPid(pid: number): Player | undefined;
    getPlayerByIdentifier(identifier: string, includeAbsent?: boolean): Player | undefined;
    getPlayerByName(name: string): Player | undefined;
    getValidPlayerName(name: string | undefined): string;
    getHeight(z0: number, z1: number, d: number): number;
    /**
     * Calculates the light level of a tile.
     * @returns 32bit number representing RED GREEN BLUE ALPHA
     */
    calculateTileLightLevel(tile: ITile, x: number, y: number, z: number): number;
    getLightSourceAt(x: number, y: number, z: number): number;
    setupSave(_: number): void;
    onGlobalSlotLoaded(_: number, success: boolean): Promise<void>;
    onSaveLoaded(slot: number): void;
    directionToMovement(direction: Direction): IVector2;
    fireBreath(x: number, y: number, z: number, facingDirection: Direction, itemName?: Translation, player?: boolean): void;
    updateOption(player: Player | undefined, id: keyof IOptions, value: boolean | number): void;
    updateFlowFieldTile(tile: ITile, x: number, y: number, z: number, tileUpdateType: TileUpdateType): void;
    packGround(x: number, y: number, z: number): void;
    getRandomQuality(bonusQuality?: number): Quality.None | Quality.Remarkable | Quality.Exceptional | Quality.Legendary;
    getQualityDurabilityBonus(quality: Quality, itemDurability: number): number;
    doLavaEvents(x: number, y: number, z: number): void;
    wrapCoordinate(cordinate: number, reference: number): number;
    isFlammable(x: number, y: number, z: number): boolean;
    getCameraPosition(): IVector2;
    getExactCameraPosition(): Vector2;
    restartDedicatedServer(): boolean;
    getFireStage(decay: number): FireStage;
    private updateOptionInternal;
    private tick;
    private updateEntityFov;
    private processTimers;
    private processAutoSave;
    private tickDayNightCycle;
    private runRandomEvents;
    private upgradeToClasses;
    private prePlay;
    private playPostSeed;
    private render;
    private simulate;
    private removeAndFixPids;
    private createWorld;
    private createWorldRenderer;
    private loadResources;
    private initializeGameState;
    private startGame;
    private initializeDedicatedServer;
    private dedicatedServerExit;
    private dedicatedServerNewGame;
    private upgradeSave;
    private upgradePlayer;
    private upgradeSaveMoveProperty;
    private upgradeGlobalSave;
}
