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
import { BlockRow } from "newui/component/BlockRow";
import { CheckButton } from "newui/component/CheckButton";
import { LabelledRow } from "newui/component/LabelledRow";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class MilestoneModifiersMenu extends Menu {
    private readonly milestones;
    rowBatchEnablingAndDisabling: BlockRow;
    filter: LabelledRow;
    private readonly modifierCheckButtons;
    constructor(milestones: Set<Milestone>, allowHostMilestones: boolean);
    createModifierCheckButton(milestone: Milestone, initialChecked?: boolean): CheckButton;
    /**
     * Returns the formatted CSS url for the stat icon.
     */
    private getMilestoneIcon;
    private updateFilter;
}
