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
import { IDifficultyOptions } from "game/Difficulty";
import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import CustomGameOptionsTab from "newui/screen/screens/menu/menus/newgame/customgameoptions/CustomGameOptionsTab";
export default class TabSkills extends CustomGameOptionsTab implements IRefreshable {
    private readonly options;
    private readonly skillComponentMap;
    private readonly addSkillConfigDropdown;
    private readonly skillsWrapper;
    constructor(api: UiApi, options: () => IDifficultyOptions);
    refresh(): this;
    private addSkill;
    private sortSkills;
}
