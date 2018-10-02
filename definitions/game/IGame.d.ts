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
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { Difficulty, Direction, FireType, ISeeds, ItemQuality, ItemType, SaveType, SkillType, TerrainType, TickSpeed, TurnMode, TurnType } from "Enums";
import TimeManager from "game/TimeManager";
import { IItemArray } from "item/IItem";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { IMultiplayerOptions, IMultiplayerWorldData, ServerInfo } from "multiplayer/IMultiplayer";
import { INPC } from "npc/INPC";
import { ICharacter, IPlayer } from "player/IPlayer";
import { INotifier } from "renderer/INotifier";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { IParticle } from "renderer/particle/IParticle";
import { IHighscoreOld, IOptions } from "save/data/ISaveDataGlobal";
import { ISaveInfo } from "save/ISaveManager";
import { ITile, ITileArray, ITileContainer, ITileData } from "tile/ITerrain";
import { ITileEvent } from "tile/ITileEvent";
import Emitter from "utilities/Emitter";
import { IVector2, IVector3 } from "utilities/math/IVector";
import Vec2 from "utilities/math/Vector2";
import { IVersionInfo } from "utilities/Version";
export interface IGame extends Emitter {
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
    tileData: {
        [index: number]: {
            [index: number]: {
                [index: number]: ITileData[];
            };
        };
    };
    tileContainers: ITileContainer[];
    items: IItemArray;
    creatures: SaferArray<ICreature>;
    doodads: SaferArray<IDoodad>;
    tileEvents: SaferArray<ITileEvent>;
    corpses: SaferArray<ICorpse>;
    creatureSpawnTimer: number;
    saveClear: boolean;
    playing: boolean;
    paused: boolean;
    autoSaveTimer: number;
    updateRender: boolean;
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
    tickSpeed: number;
    crafted: {
        [index: number]: ICrafted;
    };
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
    readonly isDailyChallenge: boolean;
    addPlayer(playerOptions?: Partial<IPlayerOptions>): IPlayer;
    addZoomLevel(amount: number): void;
    updateZoomLevel(): void;
    animateSkeletalRemains(player: IPlayer, x: number, y: number, z: number): void;
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, nondeterministic?: boolean): boolean;
    changeTile(newTileInfo: TerrainType | ITileData, x: number, y: number, z: number, stackTiles: boolean, dropTiles?: boolean): void;
    checkForHiddenMob(human: IBaseHumanEntity, x: number, y: number, z: number): void;
    checkWaterFill(x: number, y: number, z: number, needed: number): void;
    consumeWaterTile(x: number, y: number, z: number): void;
    damage(target: IPlayer | ICreature | IBaseHumanEntity, damageInfo: IDamageInfo, causesBlood?: boolean): number | undefined;
    deletePlayer(plys: IPlayer[], identifier: string): void;
    directionToMovement(direction: Direction): IVector2;
    doLavaEvents(x: number, y: number, z: number): void;
    enableFlowFieldDebug(): void;
    fireBreath(x: number, y: number, z: number, facingDirection: Direction, itemName?: Translation): void;
    getAmbientLightLevel(z: number): number;
    getBenignity(): number | undefined;
    getBlackness(): number;
    getCameraPosition(): IVector2;
    getCompletedMilestoneCount(): number;
    getDifficulty(): Difficulty;
    getFireMessage(decay?: number, isOpenFire?: boolean): Message;
    getHeight(z0: number, z1: number, d: number): number;
    getInspectHealthMessage(percent: number, skillPercent: number, name: Translation): Message | Translation;
    getLightSourceAt(x: number, y: number, z: number): number;
    getMalignity(): number | undefined;
    getMaxDurability(quality: ItemQuality, itemDurability: number): number;
    getMaxHealth(): number | undefined;
    getMovementFinishTime(): number;
    getNearestPlayer(x: number, y: number, z?: number): IPlayer | undefined;
    getOrCreateTile(x: number, y: number, z: number): ITile;
    getOrCreateTileData(x: number, y: number, z: number): ITileData[];
    getPlayerByIdentifier(identifier: string, includeAbsent?: boolean): IPlayer | undefined;
    getPlayerByName(name: string): IPlayer | undefined;
    getPlayerByPid(pid: number): IPlayer | undefined;
    getPlayers(includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersThatSeePosition(tileX: number, tileY: number, tileZ: number): IPlayer[];
    getRandomQuality(itemType?: ItemType, bonusQuality?: number): ItemQuality;
    getReputation(): number | undefined;
    getSkillPercent(skill: SkillType): number | undefined;
    getStrength(): number | undefined;
    getTactics(): number | undefined;
    getTile(x: number, y: number, z: number): ITile;
    getTileData(x: number, y: number, z: number): ITileData[] | undefined;
    getTileFromPoint(point: IVector3): ITile;
    getTileUnsafe(x: number, y: number, z: number): ITile;
    getValidPlayerName(name: string | undefined): string;
    getWrappedCoord(x: number): number;
    initialize(): void;
    isFlammable(x: number, y: number, z: number): boolean;
    isOnFire(tile: ITile): FireType;
    isPlayerAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    isPlayerAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    isPositionEmpty(x: number, y: number, z: number): boolean;
    isPositionFull(x: number, y: number, z: number): boolean;
    isRealTimeMode(): boolean;
    getTurnMode(): TurnMode;
    setTurnMode(turnMode: TurnMode): void;
    getTickSpeed(): number;
    setTickSpeed(tickSpeed: number): void;
    isTileEmpty(tile: ITile): boolean;
    isTileFull(tile: ITile): boolean;
    makeCaveEntrance(player: IPlayer): TerrainType | undefined;
    makeLavaPassage(player: IPlayer): TerrainType | undefined;
    makeMiniMap(offsetX: number, offsetY: number, offsetZ: number, skillCheck?: boolean): void;
    onGlobalSlotLoaded(_: number, success: boolean): void;
    onSaveLoaded(slot: number): void;
    outputFireMessage(player: IPlayer, decay?: number, isOpenFire?: boolean): void;
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
    saveGame(saveType: SaveType): Promise<ISaveInfo | undefined>;
    setGlContextSize(width: number, height: number): void;
    setPaused(paused: boolean, showChatMessage?: boolean): void;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    setupSave(_: number): void;
    shouldRender(): number;
    synchronizeFlowFields(plys: IPlayer[]): void;
    tickRealtime(): void;
    updateFlowFieldTile(tile: ITile, x: number, y: number, z: number): void;
    updateOption(player: IPlayer | undefined, id: keyof IOptions, value: boolean | number): void;
    updateReputation(reputation: number): void;
    updateTablesAndWeight(): void;
    updateThumbnail(): Promise<void>;
    updateView(updateFov: boolean): void;
    wrapCoordinate(cordinate: number, reference: number): number;
}
export default IGame;
export declare enum GameEvent {
    GlobalSlotLoaded = 0,
    Pause = 1,
    Resume = 2
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
};
export interface IPlayOptions {
    slot: number | undefined;
    name: string;
    seed: string | number | undefined;
    difficulty: Difficulty;
    character: ICharacter;
    multiplayer: IMultiplayerOptions | undefined;
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
}
export interface ICrafted {
    unlockTime: number;
    newUnlock: boolean;
}
export declare const lineOfSightRadius = 15;
export declare const lineOfSightMaxRadius = 20;
export declare const lineOfSightDetail = 4;
export declare const interval = 16.6666;
export declare const maximumDirectionTurnDelay: number;
export declare const defaultDirectionTurnDelay: number;
