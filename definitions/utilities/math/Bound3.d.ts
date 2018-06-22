import Vec2 from "utilities/math/Vector2";
export interface IBound3 {
    min: Vec2;
    max: Vec2;
    z: number;
}
export default class Bound3 implements IBound3 {
    min: Vec2;
    max: Vec2;
    z: number;
    static contains(bound: IBound3, x: number, y: number, z: number): boolean;
    static containsIgnoreZ(bound: IBound3, x: number, y: number): boolean;
    constructor(min: Vec2, max: Vec2, z: number);
}
