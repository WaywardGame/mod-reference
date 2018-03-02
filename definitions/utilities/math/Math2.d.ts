import { Bound3 } from "utilities/math/Bound3";
import { IPoint, IPointZ } from "utilities/math/IPoint";
declare module Math2 {
    function copyPointZ(pointZ: IPointZ | undefined): IPointZ | undefined;
    function clamp255(value: number): number;
    function clamp01(value: number): number;
    function clamp(value: number, min: number, max: number): number;
    function roundNumber(num: number, dec: number): number;
    function lerp(from: number, to: number, t: number): number;
    function easeInQuad(time: number, start: number, change: number, duration: number): number;
    function easeInCubic(time: number, start: number, change: number, duration: number): number;
    function isInBound2Wrapped(bound: Bound3, x: number, y: number): boolean;
    function isInBound3Wrapped(bound: Bound3, x: number, y: number, z: number): boolean;
    function isDistanceBetweenLessThan(value: number, a: IPoint, b: IPoint): boolean;
    function distanceBetween(a: IPoint, b: IPoint): number;
}
export default Math2;
