import { IModdable } from "Enums";
export interface IMusicDescription extends IModdable {
}
export interface ISoundEffectDescription extends IModdable {
    variations?: number;
}
