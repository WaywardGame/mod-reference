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
    DailyChallenge = 8,
    DoodadManager = 9,
    EnumManager = 10,
    FlowFieldManager = 11,
    Game = 12,
    HookManager = 13,
    InterModRegistryManager = 14,
    ItemManager = 15,
    Languages = 16,
    MapGen = 17,
    Matchmaking = 18,
    Mod = 19,
    Mods = 20,
    Multiplayer = 21,
    NewUi = 22,
    NPCManager = 23,
    Packet = 24,
    Player = 25,
    ResourceLoader = 26,
    SaveManager = 27,
    Serializer = 28,
    Shaders = 29,
    Steamworks = 30,
    TileEventManager = 31,
    Trello = 32,
    Ui = 33,
    Utilities = 34,
    WebAssembly = 35,
    WebRTCConnection = 36,
    WebSocketConnection = 37
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
    function setWinston(winston: any, path: string): void;
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
