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
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import { IModInfo } from "mod/IModInfo";
import { CheckButton } from "newui/component/CheckButton";
interface IModRowEvents extends Events<CheckButton> {
    shouldRefreshMenu(): any;
}
export interface ModRowData {
    modInfo: IModInfo;
}
export default class ModRow extends CheckButton {
    event: IEventEmitter<this, IModRowEvents>;
    readonly info: IModInfo;
    readonly index: number;
    private buttonOptions;
    private buttonView;
    private buttonPublish;
    constructor(modIndex: number, modInfo: IModInfo);
    updateButtons(): void;
    onChecked(checked: boolean, prompts?: boolean): Promise<boolean>;
    protected onToggle(checked: boolean): void;
    private canPublish;
    private getDependencyNames;
    private isLoadable;
    private onPublish;
}
export {};
