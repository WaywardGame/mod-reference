import { CaseStyle, SentenceCaseStyle } from "Enums";
export declare const matchLanguageLetters: RegExp;
export declare const matchNotLanguageLetters: RegExp;
declare module Strings {
    function parseMarkup(markupText: string): string;
    function formatSentenceCase(text: string, textCase: SentenceCaseStyle): string;
    function isFirstLetterCapital(str: string): boolean;
    function capitalizeFirstLetter(str: string): string;
    function formatCaseStyle(str: string, caseStyle: CaseStyle): string;
    function escapeHTML(str: string): string;
    function stripHTML(str: string): string;
    function fixObjectCaseStyle(obj: any, caseStyle: CaseStyle, whitelist?: string[]): any;
    function stripParentDirectoryAccessorsFromPath(path: string): string;
    function encodeURIComponentPath(p: string): string;
}
export default Strings;
