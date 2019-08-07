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
import ChallengeModifier from "game/options/modifiers/challenge/ChallengeModifier";
import { Challenge } from "game/options/modifiers/challenge/IChallenge";
import GameplayModifiersManager, { GameplayModifiersCollection } from "game/options/modifiers/GameplayModifiersManager";
import { ITooltip } from "newui/component/IComponent";
export declare const EXCLUSIVE_MODIFIERS: Challenge[][];
declare class ChallengeModifiersManager extends GameplayModifiersManager<Challenge, ChallengeModifier> {
    constructor();
    createCollection(seed?: number): ChallengeModifiersCollection;
}
declare const _default: ChallengeModifiersManager;
export default _default;
export declare class ChallengeModifiersCollection extends GameplayModifiersCollection<Challenge, ChallengeModifier> {
    getTooltip(challenge: Challenge, tooltip: ITooltip): ITooltip;
}
