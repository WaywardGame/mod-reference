import { StatType } from "Enums";
export declare class SkillLevel {
    percent: number;
    bonus: number;
    core: number;
}
export interface ISkillSet {
    [index: number]: SkillLevel;
}
export interface ISkillDescription {
    name?: string;
    description?: string;
    attribute?: StatType;
    reputation?: number;
}
export declare function skillSet(): ISkillSet;
export declare function skillChance(level: number): number;
export declare const skillDescriptions: Description<ISkillDescription>;
