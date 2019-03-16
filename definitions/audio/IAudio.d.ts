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
import EnumCursor from "utilities/enum/EnumCursor";
export interface IAudio {
    resetMusicHandler(): void;
    getMusicHandler(): EnumCursor<Music>;
    setMusicHandler(handler: EnumCursor<Music>): void;
    playMusic(): void;
    stopMusic(): void;
    processEffects(): void;
    queueEffect(soundEffect: SfxType, x: number, y: number, z: number, delay?: number, speed?: number, noPosition?: boolean): void;
    updateMusicSpeed(speed: number): void;
    updatePosition(): void;
    updateVolume(): void;
}
export default IAudio;
export declare enum SfxType {
    Bow = 0,
    Craft = 1,
    Death = 2,
    Eating = 3,
    Exceptional = 4,
    Fail = 5,
    TreeHit = 6,
    Hit = 7,
    Hurt = 8,
    Miss = 9,
    CreatureHit = 10,
    CreatureNoise = 11,
    PickUp = 12,
    RockHit = 13,
    SandstoneHit = 14,
    Swim = 15,
    Throw = 16,
    Trample = 17,
    Walk = 18,
    Water = 19,
    Click = 20,
    Damaged = 21,
    Chat = 22,
    UiSelect = 23,
    UiActivate = 24
}
export declare enum Music {
    Shipwrecked = 0,
    OpeningTheme = 1,
    DarkerWorld = 2,
    Crux = 3,
    TheFirstSpark = 4,
    HauntingInterlude = 5,
    NomadsHeartBeat = 6,
    LootStep = 7,
    PerilsOfPlunder = 8,
    DreamInterlude = 9,
    TheWildBorn = 10,
    NightOwl = 11,
    SurvivalInstinct = 12,
    Savage = 13,
    Underworld = 14,
    ThirdSunrise = 15,
    WistfulInterlude = 16,
    ShudderSounds = 17
}
