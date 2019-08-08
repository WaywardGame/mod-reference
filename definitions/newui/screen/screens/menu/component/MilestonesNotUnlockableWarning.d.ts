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
import { GameMode } from "game/options/IGameOptions";
import Component from "newui/component/Component";
import { IRefreshable } from "newui/component/Refreshable";
import { Paragraph } from "newui/component/Text";
export default class MilestonesNotUnlockableWarning extends Component implements IRefreshable {
    private readonly gameMode;
    readonly milestonesNotUnlockableWarning: Paragraph;
    constructor(gameMode?: () => GameMode | undefined);
    refresh(): this;
}
