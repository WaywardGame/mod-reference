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
    OnItemEquip = 41,
    OnKeyBindPress = 42,
    OnKeyDown = 43,
    OnKeyUp = 44,
    OnMouseDown = 45,
    OnMouseMove = 46,
    OnMouseScroll = 47,
    OnMouseUpOrLeave = 48,
    OnMove = 49,
    OnMoveComplete = 50,
    OnMoveDirectionUpdate = 51,
    OnNoInputReceived = 52,
    OnPickupDoodad = 53,
    OnPlayerDamage = 54,
    OnPlayerDeath = 55,
    OnPlayerTickEnd = 56,
    OnPlayerTickStart = 57,
    OnQueueSoundEffect = 58,
    OnShowInGameScreen = 59,
    OnSpawnCreatureFromGroup = 60,
    OnTurnEnd = 61,
    OnTurnStart = 62,
    OnUpdateWeight = 63,
    PostExecuteAction = 64,
    PostGenerateWorld = 65,
    PostRender = 66,
    PostRenderPostProcess = 67,
    PostRenderWorld = 68,
    PreExecuteAction = 69,
    PreRender = 70,
    PreRenderPostProcess = 71,
    PreRenderWorld = 72,
    ProcessInput = 73,
    ShouldRender = 74,
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
    hooks?: string[];
    languages?: string[];
    stylesheets?: string[];
    imageOverrides?: boolean;
    customizations?: boolean;
    publishedFileId?: string;
}
