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
export default class SkillsDialog extends Dialog {
    private readonly skills;
    private readonly inputFilter;
    private readonly sortRow;
    constructor(api: IGameScreenApi);
    getName(): UiTranslation;
    private updateSkill;
    private sort;
    private sortSkills;
    private filter;
    private shouldShowSkill;
    private getFilterString;
    private getSkillReadout;
    private getTooltip;
    private getSkillAttributeMessage;
}
