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
export interface IVersionInfo {
    str: string;
    stage: "beta" | "release";
    major: number;
    minor: number;
    patch: number;
    name?: string;
    date?: Date;
}
declare module Version {
    function getVersionInfo(version: string): IVersionInfo;
    function isSameVersion(version: IVersionInfo, compareVersion: IVersionInfo): boolean;
    function getVersionDisplayString(version?: string | IVersionInfo): string;
}
export default Version;
