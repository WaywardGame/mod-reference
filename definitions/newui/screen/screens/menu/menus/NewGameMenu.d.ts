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
import { Milestone } from "game/milestones/IMilestone";
import { GameMode, IGameOptions } from "game/options/IGameOptions";
import Input from "newui/component/Input";
import Menu from "newui/screen/screens/menu/component/Menu";
import MilestonesNotUnlockableWarning from "newui/screen/screens/menu/component/MilestonesNotUnlockableWarning";
import TabGameMode from "newui/screen/screens/menu/menus/newgame/TabGameMode";
import TabGameplayModifiers from "newui/screen/screens/menu/menus/newgame/TabGameplayModifiers";
import TabMultiplayer from "newui/screen/screens/menu/menus/newgame/TabMultiplayer";
export default class NewGameMenu extends Menu {
    readonly inputName: Input;
    readonly inputSeed: Input;
    readonly milestonesNotUnlockableWarning: MilestonesNotUnlockableWarning;
    readonly tabGameMode: TabGameMode;
    readonly tabMultiplayer: TabMultiplayer;
    readonly tabGameplayModifiers: TabGameplayModifiers;
    difficultyOptions?: IGameOptions;
    readonly milestones: Set<Milestone>;
    private slot;
    private wasEditedPreShown;
    constructor();
    setSeed(seed: string | number, lock?: boolean): this;
    setDifficulty(difficulty: GameMode, lock?: boolean): this;
    setDifficultyOptions(options: IGameOptions): this;
    setMultiplayer(): this;
    getDifficultyOptions(): IGameOptions;
    protected refreshAsync(): Promise<void>;
    private getDefaultSaveName;
    private refresh;
    private startOrNext;
    private getPlayOptions;
}
