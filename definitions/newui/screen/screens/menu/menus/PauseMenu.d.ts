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
import Menu from "newui/screen/screens/menu/component/Menu";
import { ISteamFriend } from "steamworks/ISteamworks";
export default class PauseMenu extends Menu {
    readonly difficulty: import("../../../../../game/Difficulty").Difficulty;
    readonly pvp: boolean;
    readonly mods: [string, import("../../../../util/Misc").ModLoadability][];
    readonly friends: ISteamFriend[];
    private readonly modesButton;
    private readonly multiplayerButton;
    private readonly optionsRow;
    private readonly multiplayerRow;
    private readonly difficultyOptionIcons;
    private readonly pauseButton;
    private readonly gameIcons;
    private multiplayerOptionsMenu;
    private steamworksFriends;
    constructor();
    showMultiplayerOptionsMenu(): this;
    protected onShow(): void;
    private showWModesMenu;
    private refreshGameIcons;
    private refreshDifficultyOptions;
    /**
     * Returns the formatted CSS url for the stat icon.
     */
    private getDifficultyOptionsIcon;
    private getHeadingText;
    private getParagraphText;
    private onQuitButtonClick;
}
