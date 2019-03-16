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
import Stream from "utilities/stream/Stream";
declare global {
    interface Map<K, V> {
        /**
         * If the given key is present in this map, returns the value associated with it. If the given key is not present,
         * the `defaultGenerator` parameter is called and returned.
         * @param key The key.
         * @param defaultGenerator A function which will return the value for this key if it is not present.
         * @param assign Whether the generated default will be stored in the map. Defaults to `false`
         */
        getOrDefault<K2 extends K>(key: K2, defaultGenerator: (key: K2) => V, assign?: boolean): V;
        /**
         * Returns a Stream for the values of this Map.
         *
         * Note: Alias of `map.values().stream()`
         */
        valueStream(): Stream<V>;
        /**
         * Returns a Stream for the keys of this Map.
         *
         * Note: Alias of `map.keys().stream()`
         */
        keyStream(): Stream<K>;
        /**
         * Returns a Stream for key-value tuple entries of this Map.
         *
         * Note: Alias of `map.entries().stream()`
         */
        entryStream(): Stream<[K, V]>;
    }
}
export default function (): void;
