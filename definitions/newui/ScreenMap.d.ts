import UiScreen from "newui/element/UiScreen";
import { UiApi } from "newui/INewUi";
export interface ExtendsScreen {
    new (uiApi: UiApi): UiScreen;
}
declare const screenMap: {
    [key: number]: ExtendsScreen;
};
export default screenMap;
