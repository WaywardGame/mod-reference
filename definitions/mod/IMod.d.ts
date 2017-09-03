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
    IsPlayerSwimming = 17,
    IsTileInspectable = 18,
    OnBuild = 19,
    OnButtonBarClick = 20,
    OnContainerItemAdd = 21,
    OnContainerItemRemove = 22,
    OnContainerItemUpdate = 23,
    OnCraft = 24,
    OnCreateWorld = 25,
    OnCreatureDamage = 26,
    OnCreatureDeath = 27,
    OnCreatureSpawn = 28,
    OnDisplayMessage = 29,
    OnDoodadSpawn = 30,
    OnGameEnd = 31,
    OnGameStart = 32,
    OnGameTickEnd = 33,
    OnGameTickStart = 34,
    OnInspectTile = 35,
    OnInventoryItemAdd = 36,
    OnInventoryItemRemove = 37,
    OnInventoryItemUpdate = 38,
    OnItemEquip = 39,
    OnKeyBindPress = 40,
    OnKeyDown = 41,
    OnKeyUp = 42,
    OnMouseDown = 43,
    OnMouseMove = 44,
    OnMouseScroll = 45,
    OnMouseUpOrLeave = 46,
    OnMove = 47,
    OnMoveComplete = 48,
    OnMoveDirectionUpdate = 49,
    OnNoInputReceived = 50,
    OnPickupDoodad = 51,
    OnPlayerDamage = 52,
    OnPlayerDeath = 53,
    OnPlayerTickEnd = 54,
    OnPlayerTickStart = 55,
    OnQueueSoundEffect = 56,
    OnShowInGameScreen = 57,
    OnSpawnCreatureFromGroup = 58,
    OnTurnEnd = 59,
    OnTurnStart = 60,
    OnUpdateWeight = 61,
    PostExecuteAction = 62,
    PostGenerateWorld = 63,
    PostRender = 64,
    PostRenderPostProcess = 65,
    PostRenderWorld = 66,
    PreExecuteAction = 67,
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
    hooks?: string[];
    languages?: string[];
    stylesheets?: string[];
    imageOverrides?: boolean;
    customizations?: boolean;
    publishedFileId?: string;
}
