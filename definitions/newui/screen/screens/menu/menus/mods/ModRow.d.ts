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
