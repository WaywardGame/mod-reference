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
import IAudio from "audio/IAudio";
import ICorpseManager from "creature/corpse/ICorpseManager";
import ICreatureManager from "creature/ICreatureManager";
import IDoodadManager from "doodad/IDoodadManager";
import { IFlowFieldManager } from "flowfield/IFlowFieldManager";
import IGame from "game/IGame";
import IItemManager from "item/IItemManager";
import LanguageManager from "language/LanguageManager";
import IModManager from "mod/IModManager";
import { IMultiplayer, IMultiplayerNetworkingOptions } from "multiplayer/IMultiplayer";
import NewUi from "newui/NewUi";
import INPCManager from "npc/INPCManager";
import IPlayer from "player/IPlayer";
import IFieldOfView from "renderer/fieldofview/IFieldOfView";
import ISpriteAtlas from "renderer/ISpriteAtlas";
import ITileAtlas from "renderer/ITileAtlas";
import IWorld from "renderer/IWorld";
import IWorldRenderer from "renderer/IWorldRenderer";
import IResourceLoader from "resources/IResourceLoader";
import ISaveData from "save/data/ISaveData";
import ISaveDataGlobal from "save/data/ISaveDataGlobal";
import ISaveManager from "save/ISaveManager";
import ISteamworks from "steamworks/ISteamworks";
import ITileEventManager from "tile/ITileEventManager";
import IUi from "ui/IUi";
export declare let absentPlayers: IPlayer[];
export declare let audio: IAudio;
export declare let corpseManager: ICorpseManager;
export declare let creatureManager: ICreatureManager;
export declare let doodadManager: IDoodadManager;
export declare let fieldOfView: IFieldOfView;
export declare let flowFieldManager: IFlowFieldManager;
export declare let game: IGame;
export declare let itemManager: IItemManager;
export declare let languageManager: LanguageManager;
export declare let localPlayer: IPlayer;
export declare let modManager: IModManager;
export declare let multiplayer: IMultiplayer;
export declare let multiplayerNetworkingOptions: IMultiplayerNetworkingOptions;
export declare let newui: NewUi;
export declare let npcManager: INPCManager;
export declare let players: IPlayer[];
export declare let renderer: IWorldRenderer;
export declare let resourceLoader: IResourceLoader;
export declare let saveData: ISaveData;
export declare let saveDataGlobal: ISaveDataGlobal;
export declare let saveManager: ISaveManager;
export declare let spriteAtlas: ISpriteAtlas;
export declare let steamworks: ISteamworks;
export declare let tileAtlas: ITileAtlas;
export declare let tileEventManager: ITileEventManager;
export declare let ui: IUi;
export declare let world: IWorld;
