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
export declare enum LogSource {
    ActionManager = 0,
    Audio = 1,
    BaseMod = 2,
    BindingManager = 3,
    Chat = 4,
    CommandManager = 5,
    CorpseManager = 6,
    CreatureManager = 7,
    DoodadManager = 8,
    EnumManager = 9,
    FlowFieldManager = 10,
    Game = 11,
    HookManager = 12,
    InterModRegistryManager = 13,
    ItemManager = 14,
    Languages = 15,
    MapGen = 16,
    Matchmaking = 17,
    Mod = 18,
    Mods = 19,
    Multiplayer = 20,
    NewUi = 21,
    NPCManager = 22,
    Packet = 23,
    Player = 24,
    ResourceLoader = 25,
    SaveManager = 26,
    Serializer = 27,
    Shaders = 28,
    Steamworks = 29,
    TileEventManager = 30,
    Trello = 31,
    Ui = 32,
    Utilities = 33,
    WebAssembly = 34,
    WebRTCConnection = 35,
    WebSocketConnection = 36
}
declare class Log {
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    trace: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    private sources;
    constructor(...sources: Array<LogSource | string>);
    setSources(...sources: Array<LogSource | string>): void;
    /**
     * Re-binds the Log methods. Called automatically when the winston instance is set.
     */
    refresh(): void;
}
export interface ISourceFilter {
    /**
     * Any misc (string) source that does not match the filter will not appear in the console.
     */
    miscSourceFilter: string;
    /**
     * Any source that is not present in this array will not appear in the console.
     */
    sources: LogSource[];
}
declare module Log {
    /**
     * Takes a winston instance and a path. Updates the static Log methods to use the winston instance.
     */
    function setWinston(w: any, path: string): void;
    function setCallback(cb?: (...args: any[]) => void): void;
    /**
     * Returns a method that can be used to `Log.info` with the given sources.
     * @param sources A list of sources to log to.
     */
    function info(...sources: Array<LogSource | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.warn` with the given sources.
     * @param sources A list of sources to log to.
     */
    function warn(...sources: Array<LogSource | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.error` with the given sources.
     * @param sources A list of sources to log to.
     */
    function error(...sources: Array<LogSource | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.trace` with the given sources.
     * @param sources A list of sources to log to.
     */
    function trace(...sources: Array<LogSource | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.debug` with the given sources.
     * @param sources A list of sources to log to.
     */
    function debug(...sources: Array<LogSource | string>): (...args: any[]) => void;
}
export declare class NullLog extends Log {
    refresh(): void;
}
export declare let nullLog: NullLog;
export default Log;
