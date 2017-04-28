import Vec2 = TSM.vec2;
import { ICorpse } from "creature/corpse/ICorpse";
import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { FacingDirection, IHighscore, IPoint, IPointZ, ISeeds, SaveType, SentenceCaseStyle, SkillType, TerrainType, TurnType } from "Enums";
import { IGame, IPlayerOptions, IPlayOptions } from "game/IGame";
import TimeManager from "game/TimeManager";
import { IItem, IItemArray, IObjectDescription } from "item/IItem";
import { Message, MessageType } from "language/Messages";
import { IPlayer } from "player/IPlayer";
import { INotifier } from "renderer/INotifier";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { IParticle } from "renderer/particle/IParticle";
import { SaveObject } from "save/ISaveManager";
import { ITile, ITileArray, ITileContainer, ITileData } from "tile/ITerrain";
import { ITileEvent } from "tile/ITileEvent";
export default class Game implements IGame {
    interval: number;
    mapSize: number;
    mapSizeSq: number;
    halfMapSize: number;
    realTimeNextTick: number;
    slot: number;
    loadedResources: boolean;
    version: string;
    saveVersion: string;
    isLoadingSave: boolean;
    absoluteTime: number;
    messageTimer: number;
    saveClear: boolean;
    playing: boolean;
    paused: boolean;
    autoSaveTimer: number;
    updateRender: boolean;
    dailyChallenge: boolean;
    fillCount: number;
    fillTile: boolean[][];
    unloading: boolean;
    spawnCoords: IPointZ;
    fadeInAmount: number;
    flowFieldSyncCount: number;
    crafted: {
        [index: number]: boolean;
    };
    newCrafted: {
        [index: number]: boolean;
    };
    contaminatedWater: IPointZ[];
    corpses: ICorpse[];
    creatures: ICreature[];
    creatureSpawnTimer: number;
    doodads: IDoodad[];
    isRealTime: boolean;
    items: IItemArray;
    lastCreationIds: {
        [index: number]: number;
    };
    savedHighscore: boolean;
    seeds: ISeeds;
    tile: ITileArray;
    tileContainers: ITileContainer[];
    tileData: ITileData[][][][];
    tileEvents: ITileEvent[];
    time: TimeManager;
    lastPlayedVersion: string;
    highscores: IHighscore[];
    playedCount: number;
    glContext: WebGLRenderingContext | null;
    mapContext: CanvasRenderingContext2D | null;
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
    particle: IParticle;
    debugRenderer: ITextureDebugRenderer;
    notifier: INotifier;
    cartographyTexture: WebGLTexture;
    visible: boolean;
    private loadedWorld;
    private shouldUpdateFieldOfView;
    private shouldUpdateCraftTableAndWeight;
    private playOptions;
    constructor();
    setGlContextSize(width: number, height: number): void;
    resizeRenderer(): void;
    checkWaterFill(x: number, y: number, z: number, needed: number): void;
    consumeWaterTile(x: number, y: number, z: number): void;
    checkForHiddenMob(player: IPlayer, x: number, y: number, z: number): void;
    animateSkeletalRemains(player: IPlayer, x: number, y: number, z: number): void;
    getWrappedCoord(x: number): number;
    getTileInFrontOfPlayer(player: IPlayer): ITile;
    getTile(x: number, y: number, z: number): ITile;
    getTileUnsafe(x: number, y: number, z: number): ITile;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    getOrCreateTile(x: number, y: number, z: number): ITile;
    setPaused(paused: boolean, chatMessage?: boolean): void;
    gameLoop: (timeStamp: any) => void;
    saveGame(saveType: SaveType, callback?: (slot?: number, bytes?: number, saveObject?: SaveObject) => void): void;
    addZoomLevel(amount: number): void;
    getFireMessage(decay: number): Message;
    outputFireMessage(player: IPlayer, decay: number): void;
    play(saveSlot: number, options?: IPlayOptions): void;
    addPlayer(playerOptions?: IPlayerOptions): IPlayer;
    removePlayer(pid: number): void;
    postLoadResources(): void;
    setRealTime(enabled: boolean): void;
    synchronizeFlowFields(plys: IPlayer[]): void;
    enableFlowFieldDebug(): void;
    resetGameState(skipSave?: boolean): void;
    shouldRender(): number;
    makeCaveEntrance(player: IPlayer): TerrainType | undefined;
    hurtTerrain(player: IPlayer | undefined, x: number, y: number, z: number, tile: ITile): boolean;
    updateFieldOfViewNextTick(): void;
    updateCraftTableAndWeightNextTick(): void;
    makeMiniMap(offsetX: number, offsetY: number, offsetZ: number, skillCheck?: boolean): void;
    getBlackness(): number;
    getAmbientLightLevel(z: number): number;
    updateReputation(reputation: number): void;
    getReputation(): number;
    getDifficulty(): string;
    getMalignity(): number;
    getBenignity(): number;
    getStrength(): number;
    getAttack(): number;
    getSkillPercent(skill: SkillType): number;
    getPlayerAverage(calc: (player: IPlayer) => number, round?: boolean): number;
    changeTile(newTile: any, changeX: number, changeY: number, changeZ: number, stackTiles: boolean): void;
    isTileFull(x: number, y: number, z: number): boolean;
    isTileFullEx(tile: ITile): boolean;
    isTileEmpty(x: number, y: number, z: number): boolean;
    processWaterContamination(): void;
    getMovementFinishTime(): number;
    passTurn(player: IPlayer, turnType?: TurnType): void;
    tickRealtime(): void;
    updateGame(): void;
    /**
     * AVOID USING THIS. USE updateCraftTableAndWeightNextTick INSTEAD!
     * For most cases you don't need this
     */
    updateCraftTableAndWeight(): void;
    rangeFinder(weaponRange: number, playerSkillLevel: number): number;
    getPlayerAtTile(tile: ITile, includeGhosts?: boolean): IPlayer | undefined;
    getPlayerAtPosition(x: number, y: number, z: number, includeGhosts?: boolean): IPlayer | undefined;
    getPlayersThatSeeTile(tileX: number, tileY: number, tileZ: number): IPlayer[];
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, isClientSide?: boolean): boolean;
    getNearestPlayer(x: number, y: number): IPlayer | undefined;
    getPlayerByPid(pid: number): IPlayer | undefined;
    getPlayerByIdentifier(identifier: string): IPlayer | undefined;
    getPlayerByName(name: string, ignoreCase?: boolean): IPlayer | undefined;
    getPlayers(includeGhosts?: boolean): IPlayer[];
    getValidPlayerName(name: string | undefined): string;
    getHeight(z0: number, z1: number, d: number): number;
    getLightSourceAt(x: number, y: number, z: number): number;
    setupSave(_: number): void;
    onGlobalSlotLoaded(_: number, success: boolean): void;
    onSaveLoaded(slot: number): void;
    getSerializationProperties(_: string): string[];
    getName(object: IItem | ICreature | IDoodad | IPlayer | undefined, textCase?: SentenceCaseStyle, withPrefix?: boolean): string;
    getNameFromDescription(description: IObjectDescription | undefined, textCase?: SentenceCaseStyle, withPrefix?: boolean): string;
    directionToMovement(direction: FacingDirection): IPoint;
    fireBreath(x: number, y: number, z: number, facingDirection: FacingDirection, itemName?: string): void;
    updateOption(player: IPlayer | undefined, id: string, value: boolean): void;
    updateFlowFieldTile(x: number, y: number, z: number): void;
    displayMessageIfCanSeeTile(x: number, y: number, z: number, message: Message, messageType: MessageType, ...messageArgs: any[]): boolean;
    getCompletedMilestoneCount(): number;
    packGround(x: number, y: number, z: number): void;
    private tick();
    private processTimers();
    private processAutoSave();
    private tickDayNightCycle();
    private runRandomEvents(player);
    private upgradeToClasses<T>(arr, c, onUpdate?);
    private processMessages();
    private prePlay(isLoadingSave, options);
    private playPostSeed(options);
    private render(delta);
    private getPotentialRecipesInContainer(container, typesChecked, potentialRecipes);
    private removeAndFixPids(playerArray, pid);
    private createWorld();
    private createWorldRenderer();
    private loadResources();
    private initializeGameState(isTravelling?);
    private setupWorldResources();
    private setZoomLevel();
    private postGenerateWorld(options);
    private playGame(options);
    private upgradeSave(saveVersion);
    private upgradeSaveMoveProperty(fromObject, toObject, propertyName, toPropertyName?);
    private upgradeGlobalSave(saveVersion);
}
