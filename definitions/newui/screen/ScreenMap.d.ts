import { UiApi } from "newui/INewUi";
import Screen from "newui/screen/Screen";
export interface ExtendsScreen {
    new (uiApi: UiApi): Screen;
}
declare const screenMap: {
    [key: number]: ExtendsScreen;
};
export default screenMap;
