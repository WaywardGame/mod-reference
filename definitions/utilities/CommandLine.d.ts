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
import { IPlayOptions } from "game/IGame";
export declare function hasSwitch(args: string, name: string, indicator?: string): boolean;
export declare function parseArgument(args: string, name: string, indicator?: string): string | undefined;
export declare function parseNewGameOptions(argsString: string): Partial<IPlayOptions> & {
    dailyChallenge?: boolean;
};
