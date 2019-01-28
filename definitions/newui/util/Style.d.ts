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
import { PathType } from "resources/IResourceLoader";
declare module Style {
    function getImagePath(src: string, path?: undefined, ext?: string, isVariable?: boolean, customPath?: string): string;
    function getImagePath(pathType: PathType, path: number, ext?: string, isVariable?: boolean, customPath?: string): string;
}
export default Style;
