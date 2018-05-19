import { UiTranslation } from "language/ILanguage";
import Dialog from "newui/screen/screens/game/component/Dialog";
import { DialogId } from "newui/screen/screens/game/Dialogs";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
export default class MessagesDialog extends Dialog {
    protected gsapi: IGameScreenApi;
    private messages;
    constructor(gsapi: IGameScreenApi);
    getID(): DialogId;
    getName(): UiTranslation;
    open(): void;
    close(): void;
    private onFocus();
    private onBlur();
}
