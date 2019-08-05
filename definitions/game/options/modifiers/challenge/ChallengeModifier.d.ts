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
import { Challenge } from "game/options/modifiers/challenge/IChallenge";
import GameplayModifier from "game/options/modifiers/GameplayModifier";
export default abstract class ChallengeModifier extends GameplayModifier<Challenge> {
    /**
     * How often this modifier should be chosen compared to the others
     */
    readonly weight: number;
    /**
     * How much "challenge" this modifier adds (or subtracts!). Defaults to `0`. Added to the result of `apply`.
     */
    challenge: number;
}
