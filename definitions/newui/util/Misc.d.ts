import { IPlayOptions } from "game/IGame";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
import Menu from "newui/screen/screens/menu/component/Menu";
export declare function startGame(gameOptions: IPlayOptions): void;
export declare function switchMenu<M extends Menu = Menu>(menu: MenuId, then?: (menu: M) => any): () => void;
