export declare module EnumProperty {
    const NAME: unique symbol;
    const OFFICIAL_MAX: unique symbol;
    const MOD_START: unique symbol;
    const LENGTH: unique symbol;
}
export declare enum EnumId {
    CreatureType = 0,
    Bindable = 1,
    ActionType = 2,
    ItemType = 3,
    TerrainType = 4,
    DoodadType = 5,
    Message = 6,
    SkillType = 7,
    HairStyle = 8,
    HairColor = 9,
    SkinColor = 10,
    Dictionary = 11,
    LanguageExtension = 12,
    Music = 13,
    SoundEffect = 14,
    Command = 15,
    Stat = 16,
    StatusEffect = 17,
    MenuBarButton = 18,
    CorpseType = 19,
    TileEventType = 20,
    OverlayType = 21,
    MessageSource = 22,
    NPCType = 23
}
export interface IEnumInfo {
    enumId: EnumId;
    enumName: string;
    enumNumber: number;
    name: string;
    onUnallocate?: ((index: number) => void);
    modIndex?: number;
}
