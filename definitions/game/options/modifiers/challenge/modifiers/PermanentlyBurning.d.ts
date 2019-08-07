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
import { IGameOptionsPartial } from "game/options/IGameOptions";
import ChallengeModifier from "game/options/modifiers/challenge/ChallengeModifier";
export default class PermanentlyBurning extends ChallengeModifier {
    readonly weight = 0.5;
    readonly challenge = 250;
    readonly options: () => IGameOptionsPartial;
}
