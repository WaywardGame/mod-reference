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
export default class Spliterables<K, T> {
    private readonly iterable;
    private readonly splitter;
    private readonly preiterated;
    constructor(iterable: IterableOf<T>, splitter: (value: T) => K);
    /**
     * Iterates over all items in the iterable that split to the given key. This method can only be called once for each key.
     */
    iterate(key: K): IterableIterator<T>;
    /**
     * Returns an iterable of split keys and an array of every value in each.
     */
    splits(): IterableIterator<[K, T[]]>;
}
