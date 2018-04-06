import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/element/Menu";
export interface ExtendsMenu {
    new (uiApi: UiApi): Menu;
}
declare const menuMap: {
    [key: number]: ExtendsMenu;
};
export default menuMap;
