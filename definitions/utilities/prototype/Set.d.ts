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
    interface Set<T> {
        /**
         * Returns a Stream for the values of this Set.
         */
        stream(): Stream<T>;
        /**
         * Adds all given values to the set.
         */
        addAll(...values: T[]): this;
        /**
         * Deletes all given values from the set. Returns whether any values were deleted.
         */
        deleteAll(...values: T[]): boolean;
        toggle(has: boolean, ...values: T[]): this;
    }
}
export default function (): void;
