/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IPlayOptions } from "game/IGame";
import { ServerInfo } from "multiplayer/IMultiplayer";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
import Menu from "newui/screen/screens/menu/component/Menu";
export declare function startGame(gameOptions: () => IPlayOptions): () => void;
export declare function startGame(gameOptions: IPlayOptions): void;
export declare function menuSwitcher<M extends Menu = Menu>(menu: MenuId | M | (() => M), then?: (menu: M, ...args: any[]) => any): (...args: any[]) => void;
export declare function switchMenu<M extends Menu = Menu>(menu: MenuId | M | (() => M), then?: (menu: M, ...args: any[]) => any, ...args: any[]): void;
export declare function switchToJoinServer(serverToJoin: ServerInfo): void;
export declare const enum ModLoadability {
    NotEnabled = "notenabled",
    Enabled = "enabled",
    Error = "error"
}
export declare function isModLoadable(publishId?: string): [string, ModLoadability];
