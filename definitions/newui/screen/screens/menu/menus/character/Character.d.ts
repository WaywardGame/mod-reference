import { ICharacter } from "player/IPlayer";
export interface ISavedCharacter extends ICharacter {
    lastUse: number;
    useCount: number;
}
export declare enum CharacterSort {
    LastUse = 0,
    Name = 1,
    UseCount = 2
}
