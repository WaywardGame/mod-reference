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
import { ICorpse } from "creature/corpse/ICorpse";
import { ICreature, IDamageInfo } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { Direction, FireType, ISeeds, ItemQuality, ItemType, SaveType, SkillType, TerrainType, TurnMode, TurnType } from "Enums";
import { Difficulty, IDifficultyOptions } from "game/Difficulty";
import { ICrafted, IGame, IMapRequest, IPlayerOptions, IPlayOptions, IWell } from "game/IGame";
import TimeManager from "game/TimeManager";
import { IItemArray } from "item/IItem";
import Translation from "language/Translation";
import { INPC } from "npc/INPC";
import { IPlayer } from "player/IPlayer";
import { INotifier } from "renderer/INotifier";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { IParticle } from "renderer/particle/IParticle";
import { IOptions } from "save/data/ISaveDataGlobal";
import { ISaveInfo } from "save/ISaveManager";
import { ITile, ITileArray, ITileContainer, ITileData } from "tile/ITerrain";
import { ITileEvent } from "tile/ITileEvent";
import Emitter from "utilities/Emitter";
import { IVector2, IVector3 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
import { IVersionInfo } from "utilities/Version";
export default class Game extends Emitter implements IGame {
    readonly interval = 16.6666;
    readonly mapSize = 512;
    readonly mapSizeSq: number;
    slot: number;
    previousSaveVersion: IVersionInfo;
    absoluteTime: number;
    autoSaveTimer: number;
    crafted: {
        [index: number]: ICrafted;
    };
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
    updateFieldOfView: boolean;
    updateRender: boolean;
    contaminatedWater: IVector3[];
    corpses: SaferArray<ICorpse>;
    creatures: SaferArray<ICreature>;
    creatureSpawnTimer: number;
    difficulty: Difficulty;
    difficultyOptions: IDifficultyOptions;
    doodads: SaferArray<IDoodad>;
    flowFieldSyncCount: number;
    items: IItemArray;
    lastCreationIds: {
        [index: number]: number;
    };
    mapGenVersion: string;
    npcs: SaferArray<INPC>;
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
    private gameCanvas;
    private thumbnailResolve?;
    private simulateInterval?;
    private renderingEnabled;
    private playOptions;
    private readonly ambientLightLevelCache;
    readonly isChallenge: boolean;
    initialize(): void;
    initGl(): Promise<void>;
    setupGl(restoring: boolean): Promise<void>;
    resetWebGL(): void;
    setGlContextSize(width: number, height: number): void;
    resizeRenderer(): void;
    checkWaterFill(x: number, y: number, z: number, needed: number): void;
    consumeWaterTile(x: number, y: number, z: number): void;
    checkForHiddenMob(human: Human, x: number, y: number, z: number): void;
    animateSkeletalRemains(player: IPlayer, x: number, y: number, z: number): void;
    getWrappedCoord(x: number): number;
    getTileFromPoint(point: IVector3): ITile;
    getTile(x: number, y: number, z: number): ITile;
    getTileUnsafe(x: number, y: number, z: number): ITile;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    getOrCreateTile(x: number, y: number, z: number): ITile;
    setPaused(paused: boolean, showChatMessage?: boolean): void;
    gameLoop: (timeStamp: any) => void;
    saveGame(saveType: SaveType): Promise<ISaveInfo | undefined>;
    updateThumbnail(): Promise<void>;
    addZoomLevel(amount: number): void;
    updateZoomLevel(): void;
    requestPlay(options: Partial<IPlayOptions> & {
        slot: number;
    }): Promise<boolean>;
    play(options: Partial<IPlayOptions>): Promise<boolean>;
    setLocalPlayer(player: IPlayer): void;
    addPlayer(playerOptions?: Partial<IPlayerOptions>): IPlayer;
    removePlayer(pid: number): void;
    deletePlayer(plys: IPlayer[], identifier: string): void;
    isRealTimeMode(): boolean;
    getTurnMode(): TurnMode;
    setTurnMode(turnMode: TurnMode): void;
    getTickSpeed(): number;
    setTickSpeed(tickSpeed: number): void;
    synchronizeFlowFields(plys: IPlayer[]): void;
    enableFlowFieldDebug(): void;
    resetGameState(skipSave?: boolean): Promise<void>;
    shouldRender(): number;
    makeLavaPassage(player: IPlayer): TerrainType | undefined;
    makeCaveEntrance(player: IPlayer): TerrainType | undefined;
    getTileData(x: number, y: number, z: number): ITileData[] | undefined;
    getOrCreateTileData(x: number, y: number, z: number): ITileData[];
    updateTablesAndWeightNextTick(): void;
    makeMiniMap(mapRequest: IMapRequest): HTMLCanvasElement;
    getBlackness(): number;
    getAmbientLightLevel(z: number): number;
    updateAmbientLightLevel(z: number): void;
    updateReputation(reputation: number): void;
    getDifficulty(): Difficulty;
    getDifficultyOptions(): IDifficultyOptions;
    getReputation(): number | undefined;
    getMalignity(): number | undefined;
    getBenignity(): number | undefined;
    getMaxHealth(): number | undefined;
    getMaxWeight(): number | undefined;
    getTactics(): number | undefined;
    getSkillPercent(skill: SkillType): number | undefined;
    getPlayerAverage(calc: (player: IPlayer) => number | undefined, round?: boolean): number | undefined;
    changeTile(newTileInfo: TerrainType | ITileData, x: number, y: number, z: number, stackTiles: boolean, dropTiles?: boolean, skipCaveDirt?: boolean): void;
    isPositionFull(x: number, y: number, z: number): boolean;
    isTileFull(tile: ITile): boolean;
    isOnFire(tile: ITile): FireType;
    isTileEmpty(tile: ITile): boolean;
    isPositionEmpty(x: number, y: number, z: number): boolean;
    processWaterContamination(): void;
    getMovementFinishTime(): number;
    passTurn(player: IPlayer, turnType?: TurnType): void;
    tickRealtime(): void;
    updateView(updateFov: boolean): void;
    /**
     * AVOID USING THIS. USE updateTablesAndWeightNextTick INSTEAD!
     * For most cases you don't need this
     */
    updateTablesAndWeight(): void;
    rangeFinder(weaponRange: number, playerSkillLevel: number): number;
    damage(target: Human | ICreature, damageInfo: IDamageInfo, causesBlood?: boolean): number | undefined;
    getPlayers(includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    isPlayerAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    isPlayerAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    getPlayersAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersAtPosition(position: IVector3, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersThatSeePosition(x: number, y: number, z: number): IPlayer[];
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, nondeterministic?: boolean): boolean;
    getNearestPlayer(x: number, y: number, z?: number): IPlayer | undefined;
    getPlayerByPid(pid: number): IPlayer | undefined;
    getPlayerByIdentifier(identifier: string, includeAbsent?: boolean): IPlayer | undefined;
    getPlayerByName(name: string): IPlayer | undefined;
    getValidPlayerName(name: string | undefined): string;
    getHeight(z0: number, z1: number, d: number): number;
    getLightSourceAt(x: number, y: number, z: number): number;
    setupSave(_: number): void;
    onGlobalSlotLoaded(_: number, success: boolean): Promise<void>;
    onSaveLoaded(slot: number): void;
    directionToMovement(direction: Direction): IVector2;
    fireBreath(x: number, y: number, z: number, facingDirection: Direction, itemName?: Translation, player?: boolean): void;
    updateOption(player: IPlayer | undefined, id: keyof IOptions, value: boolean | number): void;
    updateFlowFieldTile(tile: ITile, x: number, y: number, z: number): void;
    getCompletedMilestoneCount(): number;
    packGround(x: number, y: number, z: number): void;
    getRandomQuality(itemType?: ItemType, bonusQuality?: number): ItemQuality;
    getMaxDurability(quality: ItemQuality, itemDurability: number): number;
    doLavaEvents(x: number, y: number, z: number): void;
    wrapCoordinate(cordinate: number, reference: number): number;
    isFlammable(x: number, y: number, z: number): boolean;
    getCameraPosition(): IVector2;
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
    private getPotentialRecipesInContainer;
    private removeAndFixPids;
    private createWorld;
    private createWorldRenderer;
    private loadResources;
    private initializeGameState;
    private startGame;
    private upgradeSave;
    private upgradePlayer;
    private upgradeSaveMoveProperty;
    private upgradeGlobalSave;
}
