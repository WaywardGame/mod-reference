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
import { IGameOptions } from "game/options/IGameOptions";
import { IRefreshable } from "newui/component/Refreshable";
import CustomGameOptionsTab from "newui/screen/screens/menu/menus/newgame/customgameoptions/CustomGameOptionsTab";
export default class TabCreatures extends CustomGameOptionsTab implements IRefreshable {
    private readonly options;
    private readonly creatureComponentMap;
    private readonly addCreatureConfigDropdown;
    private readonly creaturesWrapper;
    constructor(options: () => IGameOptions);
    refresh(): this;
    private addCreature;
    private sortCreatures;
}
