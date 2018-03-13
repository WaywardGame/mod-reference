import { UiApi } from "newui/INewUi";
import { BlockRow } from "newui/util/BlockRow";
import Button from "newui/util/Button";
import Menu from "newui/util/Menu";
import { Heading, Paragraph } from "newui/util/Text";
export default class PauseMenu extends Menu {
    protected multiplayerButton: Button;
    protected optionsButton: Button;
    protected optionsRow: BlockRow;
    protected paragraph: Paragraph;
    protected heading: Heading;
    constructor(uiApi: UiApi);
    refresh(): Promise<void>;
}
