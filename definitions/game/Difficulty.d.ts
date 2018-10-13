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
import { StatType, StatusType } from "Enums";
export declare enum Difficulty {
    Hardcore = 0,
    Casual = 1,
    DailyChallenge = 2,
    Custom = 3
}
export interface IDifficultyOptions {
    peaceful: boolean;
    respawnOnDeath: boolean;
    reputationGainMultipler: number;
    reputationLossMultipler: number;
    initialMalignity: number;
    initialBenignity: number;
    statChangeTimerMultipler: Map<StatType, number> | undefined;
    initialTime: number;
    freezeTime: boolean;
    permanentStatusEffects: StatusType[] | undefined;
    noInitialItems: boolean;
    disableMods: boolean;
}
export declare function getDefaultDifficultyOptions(difficulty: Difficulty): IDifficultyOptions;
