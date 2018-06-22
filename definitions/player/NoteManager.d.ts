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
    Bleeding = 0,
    Burned = 1,
    Caving = 2,
    Combat = 3,
    Corpse = 4,
    CreatureTaming = 5,
    Dehydration = 6,
    Durability = 7,
    Encumbered = 8,
    FailureInCrafting = 9,
    Gardening = 10,
    HealthIssues = 11,
    Inedible = 12,
    Merchantile = 13,
    Nightfall = 14,
    Poisoned = 15,
    Reputation = 16,
    StaminaReplenishment = 17,
    Stranded = 18,
    ToolUse = 19
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
export interface INoteHost {
    canWriteInHours(): boolean;
    canWriteNote(note: INote): boolean;
    onWriteNote(index: number): void;
}
export default class NoteManager {
    private readonly host;
    private readonly _notes;
    constructor(host: INoteHost);
    readonly notes: INote[];
    getNote(id: number): INote | undefined;
    wasWritten(note: Note): boolean;
    write(note: Note, ...args: any[]): void;
}
