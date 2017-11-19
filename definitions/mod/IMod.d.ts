export declare enum Hook {
    CanConsumeItem = 0,
    CanCreatureAttack = 1,
    CanCreatureMove = 2,
    CanCreatureSpawn = 3,
    CanDoodadSpawn = 4,
    CanDropItem = 5,
    CanPickupDoodad = 6,
    CanPlayerAttack = 7,
    CanSeeCreature = 8,
    GetAmbientColorCave = 9,
    GetAmbientColorDay = 10,
    GetAmbientColorNight = 11,
    GetAmbientLightLevel = 12,
    GetCreatureSpriteBatchLayer = 13,
    GetNextMusicTrack = 14,
    GetPlayerMaxHealth = 15,
    GetPlayerSpriteBatchLayer = 16,
    GetPlayerWeightMovementPenalty = 17,
    GetPlayerWeightStatus = 18,
    IsPlayerSwimming = 19,
    IsTileInspectable = 20,
    OnBuild = 21,
    OnButtonBarClick = 22,
    OnContainerItemAdd = 23,
    OnContainerItemRemove = 24,
    OnContainerItemUpdate = 25,
    OnCraft = 26,
    OnCreateWorld = 27,
    OnCreatureDamage = 28,
    OnCreatureDeath = 29,
    OnCreatureSpawn = 30,
    OnDisplayMessage = 31,
    OnDoodadSpawn = 32,
    OnGameEnd = 33,
    OnGameStart = 34,
    OnGameTickEnd = 35,
    OnGameTickStart = 36,
    OnInspectTile = 37,
    OnInventoryItemAdd = 38,
    OnInventoryItemRemove = 39,
    OnInventoryItemUpdate = 40,
    OnBindLoop = 41,
    OnItemEquip = 42,
    OnMove = 43,
    OnMoveComplete = 44,
    OnMoveDirectionUpdate = 45,
    OnNoInputReceived = 46,
    OnPickupDoodad = 47,
    OnPlayerDamage = 48,
    OnPlayerDeath = 49,
    OnPlayerJoin = 50,
    OnPlayerLeave = 51,
    OnPlayerTickEnd = 52,
    OnPlayerTickStart = 53,
    OnQueueSoundEffect = 54,
    OnShowInGameScreen = 55,
    OnSpawnCreatureFromGroup = 56,
    OnTileUpdate = 57,
    OnTurnEnd = 58,
    OnTurnStart = 59,
    OnUpdateWeight = 60,
    PostExecuteAction = 61,
    PostGenerateWorld = 62,
    PostRender = 63,
    PostRenderPostProcess = 64,
    PostRenderWorld = 65,
    PreExecuteAction = 66,
    PreExecuteCommand = 67,
    PreRender = 68,
    PreRenderPostProcess = 69,
    PreRenderWorld = 70,
    ProcessInput = 71,
    ShouldRender = 72,
}
export declare const globalHooks: Hook[];
export interface IModConfig {
    name: string;
    description: string;
    version: string;
    author: string;
    file: string;
    unloadable?: boolean;
    dependencies?: string[];
    compatibleMinorVersions: number[];
    multiplayerCompatible?: boolean;
    multiplayerClientside?: boolean;
    hooks?: string[];
    languages?: string[];
    stylesheets?: string[];
    imageOverrides?: boolean;
    customizations?: boolean;
    publishedFileId?: string;
}
