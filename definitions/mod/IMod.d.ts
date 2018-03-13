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
    GetAmbientColor = 10,
    GetAmbientColorCave = 11,
    GetAmbientColorDay = 12,
    GetAmbientColorNight = 13,
    GetAmbientLightLevel = 14,
    GetCreatureSpriteBatchLayer = 15,
    GetPlayerFieldOfViewRadius = 16,
    GetPlayerMaxHealth = 17,
    GetPlayerStrength = 18,
    GetPlayerSpriteBatchLayer = 19,
    GetPlayerWeightMovementPenalty = 20,
    GetPlayerWeightStatus = 21,
    GetTileLightLevel = 22,
    IsPlayerSwimming = 23,
    IsTileInspectable = 24,
    OnBindLoop = 25,
    OnBuild = 26,
    OnButtonBarClick = 27,
    OnContainerItemAdd = 28,
    OnContainerItemRemove = 29,
    OnContainerItemUpdate = 30,
    OnCraft = 31,
    OnCreateWorld = 32,
    OnCreatureDamage = 33,
    OnCreatureDeath = 34,
    OnCreatureSpawn = 35,
    OnDisplayMessage = 36,
    OnDoodadSpawn = 37,
    OnGameEnd = 38,
    OnGameStart = 39,
    OnGameTickEnd = 40,
    OnGameTickStart = 41,
    OnInspectTile = 42,
    OnInventoryItemAdd = 43,
    OnInventoryItemRemove = 44,
    OnInventoryItemUpdate = 45,
    OnItemEquip = 46,
    OnMove = 47,
    OnMoveComplete = 48,
    OnMoveDirectionUpdate = 49,
    OnNoInputReceived = 50,
    OnPickupDoodad = 51,
    OnPlayerDamage = 52,
    OnPlayerDeath = 53,
    OnPlayerJoin = 54,
    OnPlayerLeave = 55,
    OnPlayerTickEnd = 56,
    OnPlayerTickStart = 57,
    OnQueueSoundEffect = 58,
    OnShowInGameScreen = 59,
    OnSpawnCreatureFromGroup = 60,
    OnTileUpdate = 61,
    OnTurnEnd = 62,
    OnTurnStart = 63,
    OnUpdateWeight = 64,
    PostExecuteAction = 65,
    PostGenerateWorld = 66,
    PostRender = 67,
    PostRenderPostProcess = 68,
    PostRenderWorld = 69,
    PreExecuteAction = 70,
    PreExecuteCommand = 71,
    PreRender = 72,
    PreRenderPostProcess = 73,
    PreRenderWorld = 74,
    ProcessInput = 75,
    ShouldRender = 76,
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
