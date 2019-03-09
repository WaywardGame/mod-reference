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
import { Difficulty } from "game/Difficulty";
import Component from "newui/component/Component";
import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { ISteamFriend } from "steamworks/ISteamworks";
export interface IGameIconsHost {
    difficulty: Difficulty;
    pvp: boolean;
    mods: Array<[string, string]>;
    friends: ISteamFriend[];
}
export default class GameIcons extends Component implements IRefreshable {
    private readonly host;
    private readonly difficulty;
    private readonly pvp;
    private readonly mods;
    private readonly friends;
    constructor(api: UiApi, host: IGameIconsHost);
    refresh(): this;
    private getModsTooltip;
    private getFriendsTooltip;
}
