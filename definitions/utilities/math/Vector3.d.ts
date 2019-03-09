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
import ISerializer, { ISerializable } from "save/ISerializer";
import { IVector2, IVector3 } from "utilities/math/IVector";
export default class Vector3 implements IVector3, ISerializable {
    static readonly ZERO: Vector3;
    static readonly ONE: Vector3;
    static readonly UP: Vector3;
    static readonly RIGHT: Vector3;
    static readonly FORWARD: Vector3;
    static cross(vector: IVector3, vector2: IVector3): Vector3;
    static cross<D extends IVector3>(vector: IVector3, vector2: IVector3, dest: D): D;
    static dot(vector: IVector3, vector2: IVector3): number;
    static distance(vector: IVector3, vector2: IVector3): number;
    static squaredDistance(vector: IVector3, vector2: IVector3): number;
    static direction(vector: IVector3, vector2: IVector3): Vector3;
    static direction<D extends IVector3>(vector: IVector3, vector2: IVector3, dest: D): D;
    static mix(vector: IVector3, vector2: IVector3, time: number): Vector3;
    static mix<D extends IVector3>(vector: IVector3, vector2: IVector3, time: number, dest: D): D;
    static sum(vector: IVector3, vector2: IVector3): Vector3;
    static sum<D extends IVector3>(vector: IVector3, vector2: IVector3, dest: D): D;
    static difference(vector: IVector3, vector2: IVector3): Vector3;
    static difference<D extends IVector3>(vector: IVector3, vector2: IVector3, dest: D): D;
    static product(vector: IVector3, vector2: IVector3): Vector3;
    static product<D extends IVector3>(vector: IVector3, vector2: IVector3, dest: D): D;
    static quotient(vector: IVector3, vector2: IVector3): Vector3;
    static quotient<D extends IVector3>(vector: IVector3, vector2: IVector3, dest: D): D;
    static is(thing: unknown): thing is IVector3;
    private readonly values;
    x: number;
    y: number;
    z: number;
    xy: [number, number];
    xz: [number, number];
    yz: [number, number];
    xyz: [number, number, number];
    constructor();
    constructor(xy: IVector2, z: number);
    constructor(xyz: number | [number, number, number] | IVector3);
    constructor(x: number, y: number, z: number);
    at(index: number): number;
    reset(): void;
    copy(): Vector3;
    copy<D extends IVector3>(dest: D): D;
    negate(): Vector3;
    negate<D extends IVector3>(dest: D): D;
    equals(vector: IVector3, threshold?: number): boolean;
    length(): number;
    squaredLength(): number;
    add(vector: IVector3): this;
    subtract(vector: IVector3): this;
    multiply(vector: IVector3): this;
    divide(vector: IVector3): this;
    scale(value: number): this;
    scale<D extends IVector3>(value: number, dest: D): D;
    normalize(): this;
    normalize<D extends IVector3>(dest: D): D;
    raw(): IVector3;
    toString(): string;
    serializeObject(serializer: ISerializer): void;
    deserializeObject(serializer: ISerializer): void;
}
