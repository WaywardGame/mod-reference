/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
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
    NPCType = 23,
    HelpArticle = 24,
    Note = 25,
    Dialog = 26,
    InterruptChoice = 27
}
export interface IEnumInfo {
    enumId: EnumId;
    enumName: string;
    enumNumber: number;
    name: string;
    onUnallocate?: ((index: number) => void);
    modIndex?: number;
    modName?: string;
}
