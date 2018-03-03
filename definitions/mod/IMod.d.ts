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
    GetPlayerSpriteBatchLayer = 18,
    GetPlayerWeightMovementPenalty = 19,
    GetPlayerWeightStatus = 20,
    GetTileLightLevel = 21,
    IsPlayerSwimming = 22,
    IsTileInspectable = 23,
    OnBindLoop = 24,
    OnBuild = 25,
    OnButtonBarClick = 26,
    OnContainerItemAdd = 27,
    OnContainerItemRemove = 28,
    OnContainerItemUpdate = 29,
    OnCraft = 30,
    OnCreateWorld = 31,
    OnCreatureDamage = 32,
    OnCreatureDeath = 33,
    OnCreatureSpawn = 34,
    OnDisplayMessage = 35,
    OnDoodadSpawn = 36,
    OnGameEnd = 37,
    OnGameStart = 38,
    OnGameTickEnd = 39,
    OnGameTickStart = 40,
    OnInspectTile = 41,
    OnInventoryItemAdd = 42,
    OnInventoryItemRemove = 43,
    OnInventoryItemUpdate = 44,
    OnItemEquip = 45,
    OnMove = 46,
    OnMoveComplete = 47,
    OnMoveDirectionUpdate = 48,
    OnNoInputReceived = 49,
    OnPickupDoodad = 50,
    OnPlayerDamage = 51,
    OnPlayerDeath = 52,
    OnPlayerJoin = 53,
    OnPlayerLeave = 54,
    OnPlayerTickEnd = 55,
    OnPlayerTickStart = 56,
    OnQueueSoundEffect = 57,
    OnShowInGameScreen = 58,
    OnSpawnCreatureFromGroup = 59,
    OnTileUpdate = 60,
    OnTurnEnd = 61,
    OnTurnStart = 62,
    OnUpdateWeight = 63,
    PostExecuteAction = 64,
    PostGenerateWorld = 65,
    PostRender = 66,
    PostRenderPostProcess = 67,
    PostRenderWorld = 68,
    PreExecuteAction = 69,
    PreExecuteCommand = 70,
    PreRender = 71,
    PreRenderPostProcess = 72,
    PreRenderWorld = 73,
    ProcessInput = 74,
    ShouldRender = 75,
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
