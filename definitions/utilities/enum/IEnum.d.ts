/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
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
    Music = 12,
    SoundEffect = 13,
    Command = 14,
    Stat = 15,
    StatusEffect = 16,
    MenuBarButton = 17,
    CorpseType = 18,
    TileEventType = 19,
    OverlayType = 20,
    MessageSource = 21,
    NPCType = 22,
    HelpArticle = 23,
    Note = 24,
    Dialog = 25,
    InterruptChoice = 26,
    ItemTypeGroup = 27,
    InspectType = 28,
    DailyChallengeModifier = 29,
    Quest = 30,
    QuestRequirement = 31,
    TerrainDecoration = 32
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
