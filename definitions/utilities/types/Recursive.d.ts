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
	map: T extends Map<infer K, infer V> ? Map<K, RecursivePartial<V>> : never;
	set: T extends Set<infer V> ? Set<RecursivePartial<V>> : never;
	object: {
		[P in keyof T]?: RecursivePartial<T[P]>;
	};
	other: T | undefined;
}[T extends Map<any, any> ? "map" : T extends Set<any> ? "set" : T extends object ? "object" : "other"];
