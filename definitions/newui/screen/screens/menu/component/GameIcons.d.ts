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
import { GameMode } from "game/GameMode";
import Component from "newui/component/Component";
import { IRefreshable } from "newui/component/Refreshable";
import { ISteamFriend } from "steamworks/ISteamworks";
export interface IGameIconsHost {
    difficulty: GameMode;
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
    constructor(host: IGameIconsHost);
    refresh(): this;
    private getModsTooltip;
    private getFriendsTooltip;
}
