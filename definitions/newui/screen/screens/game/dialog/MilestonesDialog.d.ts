/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import UiTranslation from "language/dictionary/UiTranslation";
import Dialog from "newui/screen/screens/game/component/Dialog";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
export default class MilestonesDialog extends Dialog {
    private readonly milestones;
    private readonly sortRow;
    constructor(api: IGameScreenApi);
    getName(): UiTranslation;
    private updateMilestone;
    private sort;
    private sortMilestones;
    private filter;
    private getFilterString;
    private getTooltip;
    private getMilestoneReadout;
    private isMilestoneComplete;
    private getMilestoneAmount;
    private visibility;
}
