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
import UiTranslation from "language/dictionary/UiTranslation";
import { IHookHost } from "mod/IHookHost";
import Dialog from "newui/screen/screens/game/component/Dialog";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
export default class QuestDialog extends Dialog implements IHookHost {
    private readonly requirements;
    private readonly questsPanel;
    private readonly questLinks;
    private current;
    constructor(api: IGameScreenApi);
    getName(): UiTranslation;
    showQuest(id: number): this;
    private getPins;
    private onSwitchPanel;
    private addQuest;
    private getQuest;
    private getTitle;
    private getDescription;
}
