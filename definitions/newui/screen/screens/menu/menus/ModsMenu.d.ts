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
import Menu from "newui/screen/screens/menu/component/Menu";
import ModRow from "newui/screen/screens/menu/menus/mods/ModRow";
export default class ModsMenu extends Menu {
    private readonly sections;
    constructor();
    getModRow(index: number): ModRow | undefined;
    protected onOverlayHidden(): Promise<void>;
    protected refreshMods(): void;
    private create;
    private sortMods;
    private setAllModStates;
    private addModSection;
}
