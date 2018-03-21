import { BlockRow } from "newui/element/BlockRow";
import Button from "newui/element/Button";
import Menu from "newui/element/Menu";
import { Heading, Paragraph } from "newui/element/Text";
import { UiApi } from "newui/INewUi";
export default class PauseMenu extends Menu {
    protected multiplayerButton: Button;
    protected optionsButton: Button;
    protected optionsRow: BlockRow;
    protected paragraph: Paragraph;
    protected heading: Heading;
    constructor(uiApi: UiApi);
    refresh(): Promise<void>;
}
