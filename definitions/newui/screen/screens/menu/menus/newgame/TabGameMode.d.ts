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
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import { GameMode } from "game/options/IGameOptions";
import ChoiceList, { Choice } from "newui/component/ChoiceList";
import { Tab } from "newui/screen/screens/menu/component/Menu";
import CustomGameOptionsMenu from "newui/screen/screens/menu/menus/newgame/CustomGameOptionsMenu";
import NewGameMenu from "newui/screen/screens/menu/menus/NewGameMenu";
export default class TabGameMode extends Tab {
    private readonly menu;
    customGameOptionsMenu: CustomGameOptionsMenu;
    readonly gameMode: ChoiceList<DifficultyChoice, false>;
    readonly choiceTurnModeManual: Choice<undefined>;
    readonly choiceTurnModeSimulated: Choice<undefined>;
    readonly choiceTurnModeRealTime: Choice<undefined>;
    readonly turnMode: ChoiceList<Choice<string | number | undefined>, false>;
    constructor(menu: NewGameMenu);
    private getCustomGameOptionsMenu;
    private updateGameMode;
    private onChangeTurnMode;
}
interface IDifficultyChoiceEvents extends Events<Choice> {
    customizeDifficulty(): any;
    updateDailyChallenge(): any;
}
declare class DifficultyChoice extends Choice<GameMode> {
    readonly difficulty: GameMode;
    event: IEventEmitter<this, IDifficultyChoiceEvents>;
    isDailyChallenge: boolean;
    private dailyChallengeButton?;
    constructor(difficulty: GameMode);
    setDailyChallenge(dailyChallenge?: boolean): void;
    private customizeDifficulty;
}
export {};
