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
import Vector2 from "utilities/math/Vector2";
import Vector3 from "utilities/math/Vector3";
export declare enum Direction {
    None = -1,
    East = 0,
    North = 1,
    West = 2,
    South = 3
}
export declare module Direction {
    const DIRECTIONS: Direction[];
    const CARDINALS: Direction[];
    function vector(direction: Direction): Vector2;
    function vector(direction: Direction, z: number): Vector3;
}
