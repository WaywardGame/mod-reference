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
import { CreatureType } from "entity/creature/ICreature";
import { StatusType } from "entity/IEntity";
import { SkillType } from "entity/IHuman";
import { Stat } from "entity/IStats";
import { Milestone } from "game/milestones/IMilestone";
import { ItemType } from "item/IItem";
import { ThreeStateButtonState } from "newui/component/ThreeStateButton";
import { IVersionInfo } from "utilities/Version";
export declare enum GameMode {
    Hardcore = 0,
    Casual = 1,
    Challenge = 2,
    Custom = 3
}
export interface IGameOptions {
    /**
     * Whether players respawn when they die
     */
    respawn: boolean;
    creatures: {
        /**
         * Whether creatures attack when unprovoked
         */
        peaceful: boolean;
        /**
         * @param On Only aberrants can spawn
         * @param Off Only non-aberrants can spawn
         * @param Null Either aberrants or non-aberrants can spawn
         */
        aberrantSpawns: ThreeStateButtonState;
        /**
         * Custom options for each creature.
         */
        creature: Map<CreatureType, IGameOptionsCreature>;
    };
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
        /**
         * A map of options for each stat.
         */
        stats: Map<Stat, IGameOptionsStat>;
        /**
         * A map of options for each status effect.
         */
        statusEffects: Map<StatusType, IGameOptionsStatusEffect>;
        /**
         * Whether skills should be randomly generated.
         *
         * Note: Randomly generated skills can be overwritten by custom options in `skills`.
         */
        randomSkills: boolean;
        /**
         * Configuration that affects every skill which doesn't have its own configuration.
         */
        globalSkills: IGameOptionsSkill;
        /**
         * Custom options for each skill.
         */
        skills: Map<SkillType, IGameOptionsSkill>;
        allRecipesUnlocked: boolean;
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
    milestoneModifiers: Set<Milestone>;
}
/**
 * "Partial" difficulty options; used to apply options over top base options. Milestone modifiers can never exist on partial difficulty options.
 */
export declare type IGameOptionsPartial = RecursivePartial<IGameOptions> & {
    milestoneModifiers?: never;
};
export interface IGameOptionsStat {
    /**
     * If this is for `Stat.Strength`, this will be the max health and max weight.
     *
     * Otherwise: A percentage: 0-100. The initial value of the stat, or `undefined` if it should be generated randomly
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
export interface IGameOptionsStatusEffect {
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
    /**
     * A multiplier for the number of ticks between effect ticks.
     */
    effectRateMultiplier: number;
    /**
     * Decrease or increase the effect of the... effect.
     */
    effectMultiplier: number;
}
export interface IGameOptionsSkill {
    /**
     * The initial value of this skill.
     */
    initial?: number;
    /**
     * A multiplier for how fast the skill is gained.
     */
    gainMultiplier: number;
}
export interface IGameOptionsCreature {
    /**
     * Can spawn at all.
     */
    allowSpawning: boolean;
    /**
     * @param On Only aberrants can spawn
     * @param Off Only non-aberrants can spawn
     * @param Null Either aberrants or non-aberrants can spawn
     */
    aberrantSpawns: ThreeStateButtonState;
}
export declare const TIME_ETERNAL_NIGHT = 0.7;
export declare function getDefaultGameOptions(difficulty: GameMode, seed?: number): IGameOptions;
export interface IGameOptionsOld extends IGameOptions {
    peaceful?: boolean;
    creatures: IGameOptions["creatures"] & {
        globalAberrantSpawns?: boolean;
    };
}
export declare module IGameOptions {
    function upgrade(difficultyOptions: IGameOptionsOld, version: IVersionInfo): string[];
}
