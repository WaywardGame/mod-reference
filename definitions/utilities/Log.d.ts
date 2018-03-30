export declare enum Source {
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
    ItemManager = 12,
    Languages = 13,
    MapGen = 14,
    Matchmaking = 15,
    Mod = 16,
    Mods = 17,
    Multiplayer = 18,
    NewUi = 19,
    NPCManager = 20,
    Packet = 21,
    Player = 22,
    ResourceLoader = 23,
    SaveManager = 24,
    Serializer = 25,
    Shaders = 26,
    Steamworks = 27,
    TileEventManager = 28,
    Trello = 29,
    Ui = 30,
    Utilities = 31,
    WebAssembly = 32,
    WebRTCConnection = 33,
    WebSocketConnection = 34,
}
declare class Log {
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    trace: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    private sources;
    constructor(...sources: Array<Source | string>);
    setSources(...sources: Array<Source | string>): void;
    /**
     * Re-binds the Log methods. Called automatically when the winston instance is set.
     */
    refresh(): void;
}
declare module Log {
    /**
     * Takes a winston instance and a path. Updates the static Log methods to use the winston instance.
     */
    function setWinston(w: any, path: string): void;
    /**
     * Returns a method that can be used to `Log.info` with the given sources.
     * @param sources A list of sources to log to.
     */
    function info(...sources: Array<Source | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.warn` with the given sources.
     * @param sources A list of sources to log to.
     */
    function warn(...sources: Array<Source | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.error` with the given sources.
     * @param sources A list of sources to log to.
     */
    function error(...sources: Array<Source | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.trace` with the given sources.
     * @param sources A list of sources to log to.
     */
    function trace(...sources: Array<Source | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.debug` with the given sources.
     * @param sources A list of sources to log to.
     */
    function debug(...sources: Array<Source | string>): (...args: any[]) => void;
}
export declare class NullLog extends Log {
    refresh(): void;
}
export declare let nullLog: NullLog;
export default Log;
