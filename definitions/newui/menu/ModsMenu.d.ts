import { IModInfo } from "mod/IModManager";
import { UiApi } from "newui/INewUi";
import { CheckButton } from "newui/util/CheckButton";
import Menu from "newui/util/Menu";
export declare enum ModSort {
    Name = 0,
    CreatedDate = 1,
    InstallDate = 2,
    Author = 3,
    LastUpdated = 4,
}
export default class ModsMenu extends Menu {
    private sections;
    constructor(uiApi: UiApi);
    refreshMods(): Promise<void>;
    getModRow(index: number): ModRow | undefined;
    private sortMods(modType, sort, direction);
    private setAllModStates(enabled);
    private addModSection(tab, disabledSorts?, beforeContent?, afterContent?);
}
export declare enum ModRowEvent {
    ShouldRefreshMenu = 0,
}
export interface ModRowData {
    modInfo: IModInfo;
}
export declare class ModRow extends CheckButton<ModRowData> {
    readonly info: IModInfo;
    readonly index: number;
    private buttonOptions;
    private buttonView;
    private buttonPublish;
    constructor(uiApi: UiApi, modIndex: number, modInfo: IModInfo);
    updateButtons(): void;
    onChecked(checked: boolean, prompts?: boolean): Promise<boolean>;
    private canPublish();
    private getDependencyNames(dependencies?);
}
