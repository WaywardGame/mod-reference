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
import { CaseStyle } from "Enums";
export declare const matchLanguageLetters: RegExp;
export declare const matchNotLanguageLetters: RegExp;
export declare const matchInvalidPathLettersWindows: RegExp;
export declare const matchInvalidPathLettersUnix: RegExp;
declare module Strings {
    function parseMarkup(markupText: string): string;
    function capitalizeFirstLetter(str: string): string;
    function formatCaseStyle(str: string, caseStyle: CaseStyle): string;
    function escapeHTML(str: string): string;
    function stripHTML(str: string): string;
    function fixObjectCaseStyle(obj: any, caseStyle: CaseStyle, whitelist?: string[]): any;
    function stripParentDirectoryAccessorsFromPath(path: string): string;
    function encodeURIComponentPath(p: string): string;
    function generateTimestamp(date?: Date): string;
}
export default Strings;
