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
import Doodad from "doodad/Doodad";
import { DoodadType, DoodadTypeGroup } from "doodad/IDoodad";
import { IVector2, IVector3 } from "utilities/math/IVector";
export declare enum CraftStatus {
    Invalid = 0,
    Failed = 1,
    Success = 2
}
export declare enum WeightType {
    Normal = 0,
    Static = 1,
    Min = 2,
    Max = 3
}
export interface RequirementInfo extends IVector2, IVector3 {
    requirementsMet: boolean;
    isLava?: boolean;
    doodadRequirementMet: boolean;
    fireRequirementMet: boolean;
    requiredDoodad: Doodad | undefined;
    doodadsUsed: IDoodadsUsed[];
}
export interface IDoodadsUsed {
    doodad: Doodad;
    group: DoodadType | DoodadTypeGroup;
}
export interface IProtectedItemOptions {
    protect: boolean;
    protectContainers: boolean;
}
