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
import { CheckButton } from "newui/component/CheckButton";
import ChoiceList, { Choice } from "newui/component/ChoiceList";
import { RangeRow } from "newui/component/RangeRow";
import { Tab } from "newui/screen/screens/menu/component/Menu";
import NewGameMenu from "newui/screen/screens/menu/menus/NewGameMenu";
export default class TabMultiplayer extends Tab {
    private readonly menu;
    readonly choiceSingleplayer: Choice<undefined>;
    readonly choiceMultiplayer: Choice<undefined>;
    readonly multiplayerMode: ChoiceList<Choice<string | number | undefined>, false>;
    readonly choiceLobbyFriends: Choice<undefined>;
    readonly choiceLobbyPublic: Choice<undefined>;
    readonly choiceLobbyPrivate: Choice<undefined>;
    readonly lobbyType: ChoiceList<Choice<string | number | undefined>, false>;
    readonly inputPVP: CheckButton;
    readonly maxPlayersRow: RangeRow;
    readonly tickSpeedRow: RangeRow;
    constructor(menu: NewGameMenu);
    private onChangeMultiplayerMode;
}
