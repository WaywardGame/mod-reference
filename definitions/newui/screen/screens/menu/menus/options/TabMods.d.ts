import Component from "newui/component/Component";
import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export declare type ModOptionSectionInitializer = (api: UiApi, component: Component) => any;
export default class TabMods extends Tab implements IRefreshable {
    private static readonly modOptions;
    static registerModOptions(modIndex: number, initializer: ModOptionSectionInitializer): void;
    static deleteModOptions(modIndex: number): void;
    static modHasOptions(modIndex: number): boolean;
    constructor(api: UiApi);
    refresh(): this;
}
