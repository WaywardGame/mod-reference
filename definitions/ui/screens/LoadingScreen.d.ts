import { LoadingType } from "Enums";
import { UiMessage } from "language/ILanguage";
import BaseScreen from "ui/screens/BaseScreen";
export default class LoadingScreen extends BaseScreen {
    visible: boolean;
    elementMessage: JQuery;
    elementNormal: JQuery;
    elementRest: JQuery;
    selector(): string;
    bindElements(): void;
    onShow(fadeAudio?: boolean): void;
    setLoadingType(loadingType: LoadingType): void;
    onHide(): void;
    setMessage(message: UiMessage): void;
    clearMessage(): void;
}
