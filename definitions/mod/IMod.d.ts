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
    GetPlayerMaxHealth = 12,
    GetPlayerSpriteBatchLayer = 13,
    IsPlayerSwimming = 14,
    IsTileInspectable = 15,
    OnBuild = 16,
    OnButtonBarClick = 17,
    OnContainerItemAdd = 18,
    OnContainerItemRemove = 19,
    OnContainerItemUpdate = 20,
    OnCraft = 21,
    OnCreateWorld = 22,
    OnCreatureDamage = 23,
    OnCreatureDeath = 24,
    OnCreatureSpawn = 25,
    OnDisplayMessage = 26,
    OnGameEnd = 27,
    OnGameStart = 28,
    OnInspectTile = 29,
    OnInventoryItemAdd = 30,
    OnInventoryItemRemove = 31,
    OnInventoryItemUpdate = 32,
    OnItemEquip = 33,
    OnKeyBindPress = 34,
    OnKeyDown = 35,
    OnKeyUp = 36,
    OnMouseDown = 37,
    OnMouseMove = 38,
    OnMouseScroll = 39,
    OnMouseUpOrLeave = 40,
    OnMove = 41,
    OnMoveDirectionUpdate = 42,
    OnNoInputReceived = 43,
    OnPlayerDamage = 44,
    OnPlayerDeath = 45,
    OnShowInGameScreen = 46,
    OnSpawnCreatureFromGroup = 47,
    OnTurnComplete = 48,
    OnTurnStart = 49,
    OnUpdateWeight = 50,
    PostGenerateWorld = 51,
    PostRender = 52,
    PostRenderPostProcess = 53,
    PostRenderWorld = 54,
    PreRender = 55,
    PreRenderPostProcess = 56,
    PreRenderWorld = 57,
    ProcessInput = 58,
    ShouldRender = 59,
}
export interface IModConfig {
    name: string;
    description: string;
    version: string;
    author: string;
    file: string;
    unloadable?: boolean;
    dependencies?: string[];
    compatibleMinorVersions?: number[];
    multiplayerCompatible?: boolean;
    hooks?: string[];
    languages?: string[];
    stylesheets?: string[];
    imageOverrides?: boolean;
    customizations?: boolean;
    publishedFileId?: string;
}
