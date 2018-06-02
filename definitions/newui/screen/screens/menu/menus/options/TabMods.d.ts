import { IRefreshable } from "newui/component/Refreshable";
import { Paragraph } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class TabMods extends Tab implements IRefreshable {
    private static readonly modOptions;
    static registerModOptions(modIndex: number, creationHandler: (uiApi: UiApi, uiElement: ModOptions) => any): void;
    static deleteModOptions(modIndex: number): void;
    static modHasOptions(modIndex: number): boolean;
    constructor(api: UiApi);
    refresh(): this;
}
export declare class ModOptions extends Paragraph {
    constructor(uiApi: UiApi);
}
