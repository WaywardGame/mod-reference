import { UiApi } from "newui/INewUi";
import UiScreen from "newui/util/UiScreen";
export interface ExtendsScreen {
    new (uiApi: UiApi): UiScreen;
}
declare const screenMap: {
    [key: number]: ExtendsScreen;
};
export default screenMap;
