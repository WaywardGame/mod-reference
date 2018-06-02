import { UiApi } from "newui/INewUi";
import { IScreen } from "newui/screen/IScreen";
export interface ExtendsScreen {
    new (uiApi: UiApi): IScreen;
}
declare const screenMap: {
    [key: number]: ExtendsScreen;
};
export default screenMap;
