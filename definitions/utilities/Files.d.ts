/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
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
declare module Files {
    function get(path: string): Promise<Response>;
    function getText(path: string): Promise<string>;
    function getJson<T>(path: string): Promise<T>;
    function getArrayBuffer(path: string): Promise<ArrayBuffer>;
    function download(name: string, data: any, stringify?: boolean, pretty?: boolean): void;
    function upload(e: Event): Promise<any>;
}
export default Files;
