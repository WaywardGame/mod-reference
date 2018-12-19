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
import ISerializer, { ISerializable } from "save/ISerializer";
import { IVector2, IVector3 } from "utilities/math/IVector";
import Vector3 from "utilities/math/Vector3";
export default class Vector2 implements IVector2, ISerializable {
    static readonly ZERO: Vector2;
    static readonly ONE: Vector2;
    static cross(vector: IVector2, vector2: IVector2): Vector3;
    static cross<D extends IVector3>(vector: IVector2, vector2: IVector2, dest: D): D;
    static dot(vector: IVector2, vector2: IVector2): number;
    static isDistanceWithin(vector: IVector2, vector2: IVector2, distance: number): boolean;
    static distance(vector: IVector2, vector2: IVector2): number;
    static squaredDistance(vector: IVector2, vector2: IVector2): number;
    static direction(vector: IVector2, vector2: IVector2): Vector2;
    static direction<D extends IVector2>(vector: IVector2, vector2: IVector2, dest: D): D;
    static mix(vector: IVector2, vector2: IVector2, time: number): Vector2;
    static mix<D extends IVector2>(vector: IVector2, vector2: IVector2, time: number, dest: D): D;
    static sum(vector: IVector2, vector2: IVector2): Vector2;
    static sum<D extends IVector2>(vector: IVector2, vector2: IVector2, dest: D): D;
    static difference(vector: IVector2, vector2: IVector2): Vector2;
    static difference<D extends IVector2>(vector: IVector2, vector2: IVector2, dest: D): D;
    static product(vector: IVector2, vector2: IVector2): Vector2;
    static product<D extends IVector2>(vector: IVector2, vector2: IVector2, dest: D): D;
    static quotient(vector: IVector2, vector2: IVector2): Vector2;
    static quotient<D extends IVector2>(vector: IVector2, vector2: IVector2, dest: D): D;
    static range(a: IVector2, b: IVector2): IterableIterator<number[]>;
    static is(thing: unknown): thing is IVector2;
    private readonly values;
    x: number;
    y: number;
    xy: [number, number];
    constructor();
    constructor(xy: number | [number, number] | IVector2);
    constructor(x: number, y: number);
    at(index: number): number;
    reset(): void;
    copy(): Vector2;
    copy<D extends IVector2>(dest: D): D;
    negate(): Vector2;
    negate<D extends IVector2>(dest: D): D;
    equals(vector: unknown, threshold?: number): boolean;
    length(): number;
    squaredLength(): number;
    add(vector: IVector2): this;
    subtract(vector: IVector2): this;
    multiply(vector: IVector2 | number): this;
    divide(vector: IVector2 | number): this;
    floor(dest?: this): this;
    lerp(vector: IVector2, amount: number): this;
    mod(n: number): this;
    scale(value: number): this;
    scale<D extends IVector2>(value: number, dest: D): D;
    normalize(): this;
    normalize<D extends IVector2>(dest: D): D;
    toRadians(): number;
    raw(): IVector2;
    clamp(a: IVector2, b: IVector2): this;
    toString(): string;
    serializeObject(serializer: ISerializer): void;
    deserializeObject(serializer: ISerializer): void;
}
