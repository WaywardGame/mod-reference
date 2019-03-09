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
import IEntity from "entity/IEntity";
import { IModdable } from "Enums";
import { PartOfDay } from "game/TimeManager";
import Note from "language/dictionary/Note";
import { HelpArticle } from "newui/screen/screens/menu/menus/help/HelpArticleDescriptions";
export interface INoteDescription extends IModdable {
    learnMore?: HelpArticle;
}
export declare const noteDescriptions: OptionalDescriptions<Note, INoteDescription>;
export declare type Time = PartOfDay | string;
export interface INote {
    id: keyof typeof Note;
    time: {
        day: number;
        time: number;
        skilled: boolean;
    };
    args: any[];
}
export interface INoteHost {
    canWriteInHours(): boolean;
    canWriteNote(note: INote): boolean;
    onWriteNote(index: number): void;
}
export default class NoteManager {
    private readonly host;
    static get(entity: IEntity): NoteManager;
    private readonly _notes;
    constructor(host: INoteHost);
    readonly notes: INote[];
    getNote(id: number): INote | undefined;
    wasWritten(note: Note): boolean;
    write(note: Note, ...args: any[]): void;
}
