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
import { Milestone } from "game/milestones/IMilestone";
import Abnormalizer from "game/modifiers/milestoneModifiers/Abnormalizer";
import Friendly from "game/modifiers/milestoneModifiers/Friendly";
declare module MilestoneModifiers {
    const classes: {
        [Milestone.Abnormalizer]: typeof Abnormalizer;
        [Milestone.Artificer]: undefined;
        [Milestone.Benevolent]: undefined;
        [Milestone.Boundless]: undefined;
        [Milestone.Challenger]: undefined;
        [Milestone.Chef]: undefined;
        [Milestone.Collector]: undefined;
        [Milestone.Contender]: undefined;
        [Milestone.Crafter]: undefined;
        [Milestone.Doctor]: undefined;
        [Milestone.DragonSlayer]: undefined;
        [Milestone.Explorer]: undefined;
        [Milestone.Exterminator]: undefined;
        [Milestone.Friendly]: typeof Friendly;
        [Milestone.Gardener]: undefined;
        [Milestone.Gatherer]: undefined;
        [Milestone.Grandmaster]: undefined;
        [Milestone.Hunter]: undefined;
        [Milestone.Huntsman]: undefined;
        [Milestone.Locksmith]: undefined;
        [Milestone.Malevolent]: undefined;
        [Milestone.Merchant]: undefined;
        [Milestone.Navigator]: undefined;
        [Milestone.Notekeeper]: undefined;
        [Milestone.Operator]: undefined;
        [Milestone.Pacifier]: undefined;
        [Milestone.Prepared]: undefined;
        [Milestone.Pulchritudinous]: undefined;
        [Milestone.ReaperOfSouls]: undefined;
        [Milestone.Seafarer]: undefined;
        [Milestone.Seasoned]: undefined;
        [Milestone.Survivor]: undefined;
        [Milestone.Talented]: undefined;
        [Milestone.Thrower]: undefined;
        [Milestone.Trapper]: undefined;
        [Milestone.TreasureHunter]: undefined;
        [Milestone.Treasurer]: undefined;
        [Milestone.Weathered]: undefined;
        [Milestone.DestroyerOfMagi]: undefined;
    };
    function getGroup(milestone: Milestone): import("./MilestoneModifier").MilestoneModifierGroup | undefined;
    function initialize(...milestones: Milestone[]): void;
    function uninitialize(): void;
    function options(): import("../../utilities/stream/Stream").default<{
        respawn?: boolean | undefined;
        creatures?: {
            peaceful?: boolean | undefined;
            aberrantSpawns?: import("../../newui/component/ThreeStateButton").ThreeStateButtonState | undefined;
            creature?: Map<import("../../entity/creature/ICreature").CreatureType, import("../GameMode").IGameOptionsCreature> | undefined;
        } | undefined;
        time?: {
            initial?: number | undefined;
            frozen?: boolean | undefined;
            dayLength?: number | undefined;
            dayPercent?: number | undefined;
        } | undefined;
        player?: {
            stats?: Map<import("../../entity/IStats").Stat, import("../GameMode").IGameOptionsStat> | undefined;
            statusEffects?: Map<import("../../entity/IEntity").StatusType, import("../GameMode").IGameOptionsStatusEffect> | undefined;
            randomSkills?: boolean | undefined;
            globalSkills?: {
                initial?: number | undefined;
                gainMultiplier?: number | undefined;
            } | undefined;
            skills?: Map<import("../../entity/IHuman").SkillType, import("../GameMode").IGameOptionsSkill> | undefined;
            allRecipesUnlocked?: boolean | undefined;
            reputation?: {
                initialMalignity?: number | undefined;
                initialBenignity?: number | undefined;
                malignityMultiplier?: number | undefined;
                benignityMultiplier?: number | undefined;
            } | undefined;
            initialItems?: boolean | import("../../item/IItem").ItemType[] | (import("../../item/IItem").ItemType | undefined)[] | undefined;
        } | undefined;
        disableMods?: boolean | undefined;
        milestoneModifiers?: {
            add?: {} | undefined;
            clear?: {} | undefined;
            delete?: {} | undefined;
            forEach?: {} | undefined;
            has?: {} | undefined;
            readonly size?: number | undefined;
            entries?: {} | undefined;
            keys?: {} | undefined;
            values?: {} | undefined;
            stream?: {} | undefined;
            addAll?: {} | undefined;
            deleteAll?: {} | undefined;
            toggle?: {} | undefined;
        } | undefined;
    } | undefined>;
}
export default MilestoneModifiers;
