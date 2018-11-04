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
import { Stat } from "entity/IStats";
import { ItemType, StatusType } from "Enums";
export declare enum Difficulty {
    Hardcore = 0,
    Casual = 1,
    DailyChallenge = 2,
    Custom = 3
}
export interface IDifficultyOptions {
    /**
     * Whether creatures attack when unprovoked
     */
    peaceful: boolean;
    /**
     * Whether players respawn when they die
     */
    respawn: boolean;
    time: {
        /**
         * A number between `0` and `1`, where `0` is the start of the day and `1` is the end.
         */
        initial: number;
        /**
         * Whether time never passes
         */
        frozen: boolean;
        /**
         * The number of turns/ticks in a day.
         */
        dayLength?: number;
        /**
         * A number between `0` and `1` representing how much of the day is "daytime" and how much of the day is "night time".
         */
        dayPercent?: number;
    };
    player: {
        stats: Map<Stat, IDifficultyOptionsStat>;
        /**
         * A map of options for each status effect.
         */
        statusEffects: Map<StatusType, IDifficultyOptionsStatusEffect>;
        reputation: {
            /**
             * The initial malignity
             */
            initialMalignity: number;
            /**
             * The initial benignity
             */
            initialBenignity: number;
            /**
             * The rate at which malignity is gained
             */
            malignityMultiplier: number;
            /**
             * The rate at which benignity is gained
             */
            benignityMultiplier: number;
        };
        /**
         * - Set to `false` to disable initial items
         * - Set to `true` to randomly generate initial items
         * - Set to an `ItemType[]` to spawn with a specific set of items
         */
        initialItems: boolean | ItemType[];
    };
    /**
     * Whether mods should be disabled
     */
    disableMods: boolean;
}
export interface IDifficultyOptionsStat {
    /**
     * The initial value of the stat, or `undefined` if it should be generated randomly
     */
    initialValue?: number;
    /**
     * The max value of the state, or `undefined` if it should be generated randomly
     */
    maxValue?: number;
    /**
     * A multiplier for the speed at which the stat changes `1` is "default", `0` is "none", `2` is "two times speed"
     */
    changeTimerMultiplier: number;
}
export interface IDifficultyOptionsStatusEffect {
    /**
     * Whether every player starts with this status effect.
     */
    startWith: boolean;
    /**
     * Whether this status effect is untreatable (IE: it must pass naturally)
     */
    untreatable: boolean;
    /**
     * A multiplier for the chance of this status effect to be passed each turn.
     */
    passChanceMultiplier: number;
}
export declare function getDefaultDifficultyOptions(difficulty: Difficulty): IDifficultyOptions;
