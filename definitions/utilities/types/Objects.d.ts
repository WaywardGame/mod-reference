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

type Entry<O> = O extends Descriptions<infer K, infer V> ? [K, V] : never;
type Key<O> = O extends Descriptions<infer K, any> ? K : never;
type Value<O> = O extends Descriptions<any, infer V> ? V : never;
