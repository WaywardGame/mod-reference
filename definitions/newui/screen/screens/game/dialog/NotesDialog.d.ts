import { UiTranslation } from "language/ILanguage";
import Dialog from "newui/screen/screens/game/component/Dialog";
import { DialogId } from "newui/screen/screens/game/Dialogs";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
export default class NotesDialog extends Dialog {
    constructor(api: IGameScreenApi);
    getID(): DialogId;
    getName(): UiTranslation;
}
