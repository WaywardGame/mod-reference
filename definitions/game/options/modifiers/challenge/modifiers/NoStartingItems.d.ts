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
export default class NoStartingItems extends ChallengeModifier {
    readonly weight = 0.75;
    readonly challenge = 50;
    readonly options: {
        player: {
            inventory: {
                randomItems: boolean;
            };
        };
    };
}
