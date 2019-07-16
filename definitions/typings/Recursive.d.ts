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

type RecursivePartial<T> = {
	[0]: {
		[P in keyof T]?: RecursivePartial<T[P]>;
	};
	[1]: T;
}[T extends Map<any, any> ? 1 : T extends object ? 0 : 1];
