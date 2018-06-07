import { IModInfo } from "mod/IModInfo";
import { CheckButton } from "newui/component/CheckButton";
import { UiApi } from "newui/INewUi";
export declare enum ModRowEvent {
    ShouldRefreshMenu = 0
}
export interface ModRowData {
    modInfo: IModInfo;
}
export default class ModRow extends CheckButton {
    readonly info: IModInfo;
    readonly index: number;
    private buttonOptions;
    private buttonView;
    private buttonPublish;
    constructor(uiApi: UiApi, modIndex: number, modInfo: IModInfo);
    updateButtons(): void;
    onChecked(checked: boolean, prompts?: boolean): Promise<boolean>;
    private canPublish;
    private getDependencyNames;
    private isLoadable;
    private onPublish;
}
