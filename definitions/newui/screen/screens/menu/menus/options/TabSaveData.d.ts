import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class TabSaveData extends Tab implements IRefreshable {
    constructor(api: UiApi);
    refresh(): this;
    private onClearBindings;
    private onClearOptions;
    private onClearSaves;
    private onClearCharacters;
    private onClearHighscores;
    private onClearMilestones;
    private onClearCraftingRecipes;
    private onClearAll;
}
