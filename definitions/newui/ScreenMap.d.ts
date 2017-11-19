import { UiApi } from "./INewUi";
import UiScreen from "./util/UiScreen";
export interface ExtendsScreen {
    new (uiApi: UiApi): UiScreen;
}
declare const screenMap: {
    [key: number]: ExtendsScreen;
};
export default screenMap;
