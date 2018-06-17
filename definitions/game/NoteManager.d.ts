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
import { PartOfDay } from "game/TimeManager";
export declare enum Note {
    Stranded = 0,
    Caving = 1,
    Corpse = 2,
    Inedible = 3,
    Nightfall = 4,
    Reputation = 5
}
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
export default class NoteManager {
    private readonly _notes;
    readonly notes: INote[];
    getNote(id: number): INote | undefined;
    write(note: Note, ...args: any[]): this;
}
