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
    FlowFieldManager = 9,
    Game = 10,
    ItemManager = 11,
    Languages = 12,
    MapGen = 13,
    Matchmaking = 14,
    Mod = 15,
    Mods = 16,
    Multiplayer = 17,
    NewUi = 18,
    NPCManager = 19,
    Packet = 20,
    Player = 21,
    ResourceLoader = 22,
    SaveManager = 23,
    Serializer = 24,
    Shaders = 25,
    Steamworks = 26,
    TileEventManager = 27,
    Trello = 28,
    Ui = 29,
    Utilities = 30,
    WebAssembly = 31,
    WebRTCConnection = 32,
    WebSocketConnection = 33,
}
declare module Log {
    function trace(source: Source, ...args: any[]): void;
    /**
     * Prefer Log.info()
     */
    function log(source: Source, ...args: any[]): void;
    function info(source: Source, ...args: any[]): void;
    function debug(source: Source, ...args: any[]): void;
    function warn(source: Source, ...args: any[]): void;
    function error(source: Source, ...args: any[]): void;
}
export default Log;
