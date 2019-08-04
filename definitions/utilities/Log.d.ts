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
    MatchmakingServer = 19,
    Mod = 20,
    Mods = 21,
    Multiplayer = 22,
    NewUi = 23,
    NPCManager = 24,
    Packet = 25,
    Player = 26,
    Reflow = 27,
    ResourceLoader = 28,
    SaveManager = 29,
    Serializer = 30,
    Shaders = 31,
    SshCommandManager = 32,
    SshServer = 33,
    Steamworks = 34,
    TileEventManager = 35,
    Trello = 36,
    Ui = 37,
    Utilities = 38,
    WebAssembly = 39,
    WebRTCConnection = 40,
    WebSocketConnection = 41
}
export interface ILog {
    debug(...args: any[]): void;
    error(...args: any[]): void;
    info(...args: any[]): void;
    trace(...args: any[]): void;
    warn(...args: any[]): void;
    setSources(...sources: Array<LogSource | string>): void;
}
export declare enum LogLineType {
    Debug = 0,
    Error = 1,
    Info = 2,
    Trace = 3,
    Warn = 4
}
export interface ILogLine {
    type: LogLineType;
    args: any[];
}
declare abstract class BaseLog implements ILog {
    debug: (...args: any[]) => void;
    error: (...args: any[]) => void;
    info: (...args: any[]) => void;
    trace: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    protected sources: Array<LogSource | string>;
    constructor(...sources: Array<LogSource | string>);
    setSources(...sources: Array<LogSource | string>): void;
    /**
     * Re-binds the Log methods. Called automatically when the winston instance is set.
     */
    abstract setup(): void;
}
declare class Log extends BaseLog {
    /**
     * Re-binds the Log methods. Called automatically when the winston instance is set.
     */
    setup(): void;
}
/**
 * Logs to an in-memory array - not the console
 */
export declare class MemoryLog extends BaseLog {
    lines: ILogLine[];
    /**
     * Re-binds the Log methods. Called automatically when the winston instance is set.
     */
    setup(): void;
    setArray(lines: ILogLine[]): void;
    clear(): void;
    private addLogLine;
}
export interface ISourceFilter {
    /**
     * Any misc (string) source that does not match the filter will not appear in the console.
     */
    miscSourceFilter: string;
    /**
     * Any source present in this array will not appear in the console.
     */
    disabledSources: Array<keyof typeof LogSource>;
}
export declare const defaultSourceFilter: ISourceFilter;
declare module Log {
    /**
     * Takes a winston instance and a path. Updates the static Log methods to use the winston instance.
     */
    function setupFileLogger(fileSystem: IFileSystem, path: IPath, logsPath: string): void;
    function refresh(): void;
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
declare class NullLog extends BaseLog {
    setup(): void;
}
export declare const nullLog: NullLog;
export default Log;
