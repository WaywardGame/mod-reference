/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import Vec2 from "utilities/math/Vector2";
export declare class TerrainTileInfo {
    q1TopLeft: Vec2;
    q1TopRight: Vec2;
    q1BottomLeft: Vec2;
    q1BottomRight: Vec2;
    q2TopLeft: Vec2;
    q2TopRight: Vec2;
    q2BottomLeft: Vec2;
    q2BottomRight: Vec2;
    q3TopLeft: Vec2;
    q3TopRight: Vec2;
    q3BottomLeft: Vec2;
    q3BottomRight: Vec2;
    q4TopLeft: Vec2;
    q4TopRight: Vec2;
    q4BottomLeft: Vec2;
    q4BottomRight: Vec2;
    q2TopRightQ1TopLeft: Vec2[];
    q2BottomLeftQ3TopLeft: Vec2[];
    q1BottomRightQ4TopRight: Vec2[];
    q3BottomRightQ4BottomLeft: Vec2[];
    centerQ1TopLeft: Vec2;
    centerQ1TopRight: Vec2;
    centerQ1BottomLeft: Vec2;
    centerQ1BottomRight: Vec2;
    centerQ2TopLeft: Vec2;
    centerQ2TopRight: Vec2;
    centerQ2BottomLeft: Vec2;
    centerQ2BottomRight: Vec2;
    centerQ3TopLeft: Vec2;
    centerQ3TopRight: Vec2;
    centerQ3BottomLeft: Vec2;
    centerQ3BottomRight: Vec2;
    centerQ4TopLeft: Vec2;
    centerQ4TopRight: Vec2;
    centerQ4BottomLeft: Vec2;
    centerQ4BottomRight: Vec2;
    centerAllQuadrantsTopLeft: Vec2[];
    centerAllQuadrantsTopRight: Vec2[];
    centerAllQuadrantsBottomLeft: Vec2[];
    centerAllQuadrantsBottomRight: Vec2[];
    animated: boolean;
    constructor(xOffset: number, yOffset: number, animated: boolean);
    getCenterTopLeft(variation: number): Vec2;
    getCenterTopRight(variation: number): Vec2;
    getCenterBottomLeft(variation: number): Vec2;
    getCenterBottomRight(variation: number): Vec2;
    getLeft(variation: number): Vec2;
    getRight(variation: number): Vec2;
    getTop(variation: number): Vec2;
    getBottom(variation: number): Vec2;
}
export declare class MountainTileInfo extends TerrainTileInfo {
    extendedInfo: TerrainTileInfo;
    constructor(xOffset: number, yOffset: number, animated: boolean);
}
