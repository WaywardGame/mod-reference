import Menu from "newui/element/Menu";
import { UiApi } from "newui/INewUi";
export interface ExtendsMenu {
    new (uiApi: UiApi): Menu;
}
declare const menuMap: {
    [key: number]: ExtendsMenu;
};
export default menuMap;
