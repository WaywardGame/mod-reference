import { PartOfDay } from "game/TimeManager";
export declare enum Note {
    Combat = 0,
    Food = 1,
    Nightfall = 2,
    Reputation = 3,
    Taming = 4,
}
export declare type Time = PartOfDay | number;
export interface INote {
    id: Note;
    time: {
        day: number;
        time: Time;
    };
    args: any[];
}
export default class NoteManager {
    private readonly _notes;
    readonly notes: INote[];
    getNote(id: number): INote | undefined;
    write(note: Note, ...args: any[]): void;
    private getTime();
}
