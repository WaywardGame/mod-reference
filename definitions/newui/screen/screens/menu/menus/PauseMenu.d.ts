import { BlockRow } from "newui/element/BlockRow";
import Button from "newui/element/Button";
import { Heading, Paragraph } from "newui/element/Text";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/element/Menu";
export default class PauseMenu extends Menu {
    protected multiplayerButton: Button;
    protected optionsButton: Button;
    protected optionsRow: BlockRow;
    protected paragraph: Paragraph;
    protected heading: Heading;
    constructor(uiApi: UiApi);
    refresh(): Promise<void>;
}
