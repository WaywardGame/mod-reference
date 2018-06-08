import { PartOfDay } from "game/TimeManager";
export declare enum Note {
    Caving = 0,
    Corpse = 1,
    Inedible = 2,
    Nightfall = 3,
    Reputation = 4
}
export declare type Time = PartOfDay | number;
export interface INote {
    id: keyof typeof Note;
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
    write(note: Note, ...args: any[]): this;
    private getTime;
}
