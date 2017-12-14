export declare enum Hook {
    CanClientMove = 0,
    CanConsumeItem = 1,
    CanCreatureAttack = 2,
    CanCreatureMove = 3,
    CanCreatureSpawn = 4,
    CanDoodadSpawn = 5,
    CanDropItem = 6,
    CanPickupDoodad = 7,
    CanPlayerAttack = 8,
    CanSeeCreature = 9,
    GetAmbientColorCave = 10,
    GetAmbientColorDay = 11,
    GetAmbientColorNight = 12,
    GetAmbientLightLevel = 13,
    GetCreatureSpriteBatchLayer = 14,
    GetNextMusicTrack = 15,
    GetPlayerMaxHealth = 16,
    GetPlayerSpriteBatchLayer = 17,
    GetPlayerWeightMovementPenalty = 18,
    GetPlayerWeightStatus = 19,
    IsPlayerSwimming = 20,
    IsTileInspectable = 21,
    OnBuild = 22,
    OnButtonBarClick = 23,
    OnContainerItemAdd = 24,
    OnContainerItemRemove = 25,
    OnContainerItemUpdate = 26,
    OnCraft = 27,
    OnCreateWorld = 28,
    OnCreatureDamage = 29,
    OnCreatureDeath = 30,
    OnCreatureSpawn = 31,
    OnDisplayMessage = 32,
    OnDoodadSpawn = 33,
    OnGameEnd = 34,
    OnGameStart = 35,
    OnGameTickEnd = 36,
    OnGameTickStart = 37,
    OnInspectTile = 38,
    OnInventoryItemAdd = 39,
    OnInventoryItemRemove = 40,
    OnInventoryItemUpdate = 41,
    OnBindLoop = 42,
    OnItemEquip = 43,
    OnMove = 44,
    OnMoveComplete = 45,
    OnMoveDirectionUpdate = 46,
    OnNoInputReceived = 47,
    OnPickupDoodad = 48,
    OnPlayerDamage = 49,
    OnPlayerDeath = 50,
    OnPlayerJoin = 51,
    OnPlayerLeave = 52,
    OnPlayerTickEnd = 53,
    OnPlayerTickStart = 54,
    OnQueueSoundEffect = 55,
    OnShowInGameScreen = 56,
    OnSpawnCreatureFromGroup = 57,
    OnTileUpdate = 58,
    OnTurnEnd = 59,
    OnTurnStart = 60,
    OnUpdateWeight = 61,
    PostExecuteAction = 62,
    PostGenerateWorld = 63,
    PostRender = 64,
    PostRenderPostProcess = 65,
    PostRenderWorld = 66,
    PreExecuteAction = 67,
    PreExecuteCommand = 68,
    PreRender = 69,
    PreRenderPostProcess = 70,
    PreRenderWorld = 71,
    ProcessInput = 72,
    ShouldRender = 73,
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
