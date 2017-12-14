import { IPlayerCustomization } from "player/IPlayer";
export interface ICharacter {
    name: string;
    customization: IPlayerCustomization;
    lastUse: number;
    useCount: number;
}
export declare enum CharacterSort {
    LastUse = 0,
    Name = 1,
    UseCount = 2,
}
