import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
import ModRow from "newui/screen/screens/menu/menus/mods/ModRow";
export declare enum ModSort {
    Name = 0,
    CreatedDate = 1,
    InstallDate = 2,
    Author = 3,
    LastUpdated = 4
}
export default class ModsMenu extends Menu {
    private readonly sections;
    constructor(api: UiApi);
    getModRow(index: number): ModRow | undefined;
    private create;
    private refreshMods;
    private sortMods;
    private setAllModStates;
    private addModSection;
}
