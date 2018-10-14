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
    Respawning = 0,
    NoHealthRegeneration = 1,
    NoStaminaRegeneration = 2,
    EternalNight = 3,
    ThirstRate = 4,
    HungerRate = 5,
    PermanentlyBleeding = 6,
    PermanentlyBurning = 7,
    PermanentlyPoisoned = 8,
    NoStartingItems = 9,
    StartingReputation = 10,
    ReputationRate = 11,
    Peaceful = 12
}
export interface IDailyChallengeModifier {
    apply(difficultyOptions: IDifficultyOptions): void;
}
export declare function applyDailyChallengeModifiers(difficultyOptions: IDifficultyOptions): IDifficultyOptions;
export declare const dailyChallengeModifiers: Descriptions<DailyChallengeModifier, IDailyChallengeModifier>;
