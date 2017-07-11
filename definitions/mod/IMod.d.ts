export declare enum Hook {
    CanConsumeItem = 0,
    CanCreatureAttack = 1,
    CanCreatureMove = 2,
    CanCreatureSpawn = 3,
    CanDropItem = 4,
    CanPlayerAttack = 5,
    CanSeeCreature = 6,
    GetAmbientColorCave = 7,
    GetAmbientColorDay = 8,
    GetAmbientColorNight = 9,
    GetAmbientLightLevel = 10,
    GetCreatureSpriteBatchLayer = 11,
    GetNextMusicTrack = 12,
    GetPlayerMaxHealth = 13,
    GetPlayerSpriteBatchLayer = 14,
    IsPlayerSwimming = 15,
    IsTileInspectable = 16,
    OnBuild = 17,
    OnButtonBarClick = 18,
    OnContainerItemAdd = 19,
    OnContainerItemRemove = 20,
    OnContainerItemUpdate = 21,
    OnCraft = 22,
    OnCreateWorld = 23,
    OnCreatureDamage = 24,
    OnCreatureDeath = 25,
    OnCreatureSpawn = 26,
    OnDisplayMessage = 27,
    OnGameEnd = 28,
    OnGameStart = 29,
    OnInspectTile = 30,
    OnInventoryItemAdd = 31,
    OnInventoryItemRemove = 32,
    OnInventoryItemUpdate = 33,
    OnItemEquip = 34,
    OnKeyBindPress = 35,
    OnKeyDown = 36,
    OnKeyUp = 37,
    OnMouseDown = 38,
    OnMouseMove = 39,
    OnMouseScroll = 40,
    OnMouseUpOrLeave = 41,
    OnMove = 42,
    OnMoveDirectionUpdate = 43,
    OnNoInputReceived = 44,
    OnPlayerDamage = 45,
    OnPlayerDeath = 46,
    OnQueueSoundEffect = 47,
    OnShowInGameScreen = 48,
    OnSpawnCreatureFromGroup = 49,
    OnTurnComplete = 50,
    OnTurnStart = 51,
    OnUpdateWeight = 52,
    PostGenerateWorld = 53,
    PostRender = 54,
    PostRenderPostProcess = 55,
    PostRenderWorld = 56,
    PreRender = 57,
    PreRenderPostProcess = 58,
    PreRenderWorld = 59,
    ProcessInput = 60,
    ShouldRender = 61,
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
