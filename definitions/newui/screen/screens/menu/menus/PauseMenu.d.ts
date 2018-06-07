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
