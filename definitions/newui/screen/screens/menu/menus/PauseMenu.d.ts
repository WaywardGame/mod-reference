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
import { BlockRow } from "newui/component/BlockRow";
import Button from "newui/component/Button";
import { Heading, Paragraph } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class PauseMenu extends Menu {
    protected multiplayerButton: Button;
    protected optionsButton: Button;
    protected optionsRow: BlockRow;
    protected paragraph: Paragraph;
    protected heading: Heading;
    private multiplayerMenu;
    constructor(uiApi: UiApi);
    private onShow;
    private getHeadingText;
    private getParagraphText;
    private onQuitButtonClick;
    private getMultiplayerMenu;
}
