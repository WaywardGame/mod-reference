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
import Button from "newui/component/Button";
import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { ModLoadability } from "newui/util/Misc";
import { ISteamFriend } from "steamworks/ISteamworks";
export declare class ServerRow extends Button implements IRefreshable {
    private readonly getFriend;
    private readonly headingPlace;
    private readonly gameIcons;
    private _server;
    server: IServer;
    private _place;
    place: number;
    readonly difficulty: number;
    readonly pvp: boolean;
    readonly mods: [string, ModLoadability][];
    readonly friends: ISteamFriend[];
    constructor(api: UiApi, server: IServer, getFriend: (player: string) => ISteamFriend | undefined);
    refresh(): this;
}
