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
import { MilestoneType } from "entity/player/IMilestone";
import Friendly from "game/modifiers/milestoneModifiers/Friendly";
declare const milestoneModifiers: {
    [MilestoneType.Abnormalizer]: undefined;
    [MilestoneType.Artificer]: undefined;
    [MilestoneType.Benevolent]: undefined;
    [MilestoneType.Boundless]: undefined;
    [MilestoneType.Challenger]: undefined;
    [MilestoneType.Chef]: undefined;
    [MilestoneType.Collector]: undefined;
    [MilestoneType.Contender]: undefined;
    [MilestoneType.Crafter]: undefined;
    [MilestoneType.Doctor]: undefined;
    [MilestoneType.DragonSlayer]: undefined;
    [MilestoneType.Explorer]: undefined;
    [MilestoneType.Exterminator]: undefined;
    [MilestoneType.Friendly]: typeof Friendly;
    [MilestoneType.Gardener]: undefined;
    [MilestoneType.Gatherer]: undefined;
    [MilestoneType.Grandmaster]: undefined;
    [MilestoneType.Hunter]: undefined;
    [MilestoneType.Huntsman]: undefined;
    [MilestoneType.Locksmith]: undefined;
    [MilestoneType.Malevolent]: undefined;
    [MilestoneType.Merchant]: undefined;
    [MilestoneType.Navigator]: undefined;
    [MilestoneType.Notekeeper]: undefined;
    [MilestoneType.Operator]: undefined;
    [MilestoneType.Pacifier]: undefined;
    [MilestoneType.Prepared]: undefined;
    [MilestoneType.Pulchritudinous]: undefined;
    [MilestoneType.ReaperOfSouls]: undefined;
    [MilestoneType.Seafarer]: undefined;
    [MilestoneType.Seasoned]: undefined;
    [MilestoneType.Survivor]: undefined;
    [MilestoneType.Talented]: undefined;
    [MilestoneType.Thrower]: undefined;
    [MilestoneType.Trapper]: undefined;
    [MilestoneType.TreasureHunter]: undefined;
    [MilestoneType.Treasurer]: undefined;
    [MilestoneType.Weathered]: undefined;
    getGroup(milestone: MilestoneType): import("./MilestoneModifier").MilestoneModifierGroup | undefined;
};
export default milestoneModifiers;
