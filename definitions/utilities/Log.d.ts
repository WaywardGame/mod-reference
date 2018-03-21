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
    private readonly sources;
    constructor(...sources: Array<Source | string>);
    refresh(): void;
}
declare module Log {
    function setWinston(w: any, path: string): void;
    function info(...sources: Array<Source | string>): (...args: any[]) => void;
    function warn(...sources: Array<Source | string>): (...args: any[]) => void;
    function error(...sources: Array<Source | string>): (...args: any[]) => void;
    function trace(...sources: Array<Source | string>): (...args: any[]) => void;
    function debug(...sources: Array<Source | string>): (...args: any[]) => void;
}
export default Log;
