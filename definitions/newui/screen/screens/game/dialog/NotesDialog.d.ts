import { UiTranslation } from "language/ILanguage";
import Dialog from "newui/screen/screens/game/component/Dialog";
import { DialogId } from "newui/screen/screens/game/Dialogs";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
export default class NotesDialog extends Dialog {
    private readonly note;
    private readonly time;
    private readonly title;
    private readonly noteId;
    private current;
    constructor(api: IGameScreenApi);
    onWrittenNote(noteId: number): void;
    getID(): DialogId;
    getName(): UiTranslation;
    showNote(noteId: number): void;
    private showLockedNote();
    private previousNote();
    private nextNote();
    private onShow();
}
