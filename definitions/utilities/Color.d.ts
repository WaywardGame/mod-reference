import { IRGB } from "Enums";
declare function Color(color: IRGB): IRGB;
declare function Color(r: number, g: number, b: number): IRGB;
declare function Color(rgb: string): IRGB;
declare function Color(rgb: number): IRGB;
declare module Color {
    function blend(...colors: IRGB[]): IRGB;
    function blend(color1: IRGB, color2: IRGB, percentage: number): IRGB;
    function getCSS(color: IRGB): string;
    function getSVGColorMatrix(color: IRGB): string;
    function equals(color1: IRGB, color2: IRGB): boolean;
}
export default Color;
