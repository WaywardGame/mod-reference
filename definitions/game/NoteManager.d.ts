import { PartOfDay } from "game/TimeManager";
export declare enum Note {
    Nightfall = 0,
    Reputation = 1,
    Caving = 2,
    Inedible = 3,
    Corpse = 4
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
