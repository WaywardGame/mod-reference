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
import { Stat } from "entity/IStats";
import ChallengeModifier from "game/options/modifiers/challenge/ChallengeModifier";
export default class NoHealthRegeneration extends ChallengeModifier {
    readonly weight = 1;
    readonly challenge = 100;
    readonly options: {
        player: {
            stats: Map<Stat, {
                changeTimerMultiplier: number;
            }>;
        };
    };
}
