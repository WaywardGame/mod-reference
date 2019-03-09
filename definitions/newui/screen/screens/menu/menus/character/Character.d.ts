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
import { ICharacter } from "player/IPlayer";
export interface ISavedCharacter extends ICharacter {
    lastUse: number;
    useCount: number;
}
export declare enum CharacterSort {
    LastUse = 0,
    Name = 1,
    UseCount = 2
}
