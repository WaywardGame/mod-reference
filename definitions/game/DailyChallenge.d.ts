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
import { IDifficultyOptions } from "game/Difficulty";
export declare enum DailyChallengeModifier {
    NoHealthRegeneration = 0,
    NoStaminaRegeneration = 1,
    EternalNight = 2,
    ThirstRate = 3,
    HungerRate = 4,
    PermanentlyBleeding = 5,
    PermanentlyBurning = 6,
    PermanentlyPoisoned = 7,
    NoStartingItems = 8,
    StartingBenignity = 9,
    StartingMalignity = 10,
    BenignityRate = 11,
    MalignityRate = 12
}
export declare const EXCLUSIVE_MODIFIERS: DailyChallengeModifier[][];
export declare function applyDailyChallengeModifiers(difficultyOptions: IDifficultyOptions): IDifficultyOptions;
export interface IDailyChallengeModifier {
    /**
     * How often this modifier should be chosen compared to the others
     */
    weight: number;
    /**
     * How much "challenge" this modifier adds (or subtracts!). Defaults to `0`. Added to the result of `apply`.
     */
    challenge?: number;
    /**
     * Applies this modifier to the difficulty options.
     */
    apply(difficultyOptions: IDifficultyOptions): number | void;
}
export declare const PERMANENT_STATUS_EFFECT_MULTIPLIER_RATE = 4;
export declare const PERMANENT_STATUS_EFFECT_MULTIPLIER = 0.5;
declare const dailyChallengeModifiers: Descriptions<DailyChallengeModifier, IDailyChallengeModifier>;
export default dailyChallengeModifiers;
