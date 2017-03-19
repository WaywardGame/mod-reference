import { UiMessage } from "language/ILanguage";
import BaseScreen from "ui/screens/BaseScreen";
export interface ConfirmOptions {
    message: string;
    buttons: UiMessage[];
    callback?: (id: number | undefined) => void;
}
export default class ConfirmScreen extends BaseScreen {
    options: ConfirmOptions;
    elementOverlay: JQuery;
    elementMessage: JQuery;
    elementButtonRow: JQuery;
    selector(): string;
    bindElements(): void;
    onShow(options: ConfirmOptions): void;
    onHide(): void;
    onKeyUp(event: JQueryEventObject): boolean | null;
}
