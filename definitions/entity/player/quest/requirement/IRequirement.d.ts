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
import IPlayer from "entity/player/IPlayer";
export declare enum QuestRequirementType {
    SailToCivilization = 0,
    CollectItem = 1,
    KillCreature = 2,
    KillCreatures = 3,
    LearnSkill = 4,
    LearnSkills = 5,
    LearnAnySkill = 6,
    Equip = 7,
    Craft = 8,
    Dismantle = 9,
    Build = 10,
    TameCreature = 11,
    TameCreatures = 12
}
export declare const enum QuestRequirementEvent {
    Met = "Met",
    Update = "Update",
    Visible = "Visible"
}
export interface IQuestRequirement<O extends any[] = any[], D extends {} = {}> {
    type: QuestRequirementType;
    options: O;
    hidden: boolean;
    completed: boolean;
    data: D;
}
export interface IQuestRequirementApi<O extends any[] = any[], D extends {} = {}> {
    host: IPlayer;
    requirement: IQuestRequirement<O, D>;
    updated: boolean;
}
