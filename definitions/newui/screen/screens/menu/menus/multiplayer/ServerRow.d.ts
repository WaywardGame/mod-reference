/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Button from "newui/component/Button";
import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { ISteamFriend } from "steamworks/ISteamworks";
export declare class ServerRow extends Button implements IRefreshable {
    private readonly getFriend;
    private readonly headingPlace;
    private readonly difficulty;
    private readonly pvp;
    private readonly mods;
    private readonly friends;
    private _server;
    server: IServer;
    private _place;
    place: number;
    constructor(api: UiApi, server: IServer, getFriend: (player: string) => ISteamFriend | undefined);
    refresh(): this;
    private getModsTooltip;
    private getFriendsTooltip;
}
