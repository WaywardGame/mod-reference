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
import Button from "newui/component/Button";
import ChoiceList, { Choice } from "newui/component/ChoiceList";
import { Tab } from "newui/screen/screens/menu/component/Menu";
import NewGameMenu from "newui/screen/screens/menu/menus/NewGameMenu";
export default class TabGameplayModifiers extends Tab {
    private readonly menu;
    readonly buttonMilestoneModifiers: Button;
    readonly choiceClientsInheritHostModifiers: Choice<undefined>;
    readonly choiceCustomModifiers: Choice<undefined>;
    readonly choiceListClientsModifiers: ChoiceList<Choice<string | number | undefined>, false>;
    private milestoneModifiersMenu;
    constructor(menu: NewGameMenu);
    resetMilestoneModifiers(): this;
    private onShow;
    private getMilestoneModifiersMenu;
}
