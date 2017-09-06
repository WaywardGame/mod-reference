import { HintType } from "ui/IHint";
import BaseScreen from "ui/screens/BaseScreen";
export default class HelpScreen extends BaseScreen {
    elementOverlay: JQuery;
    elementTitle: JQuery;
    elementHeader: JQuery;
    elementContent: JQuery;
    elementButtonRow: JQuery;
    selector(): string;
    bindElements(): void;
    setHeight(): void;
    onShow(data: any): void;
    onHide(): void;
    displayHint(hintType: HintType): void;
    onButtonClick(id: string): void;
    reloadToggleHintsState(): void;
}
