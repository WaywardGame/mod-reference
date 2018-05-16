import { MessageSource } from "game/IMessageManager";
import { UiTranslation } from "language/ILanguage";
import { IHookHost } from "mod/IHookHost";
import { UiApi } from "newui/INewUi";
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import { IStringSection } from "utilities/string/Interpolator";
export default class Messages extends QuadrantComponent implements IHookHost {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    private readonly sendButton;
    private readonly input;
    private readonly notes;
    private readonly log;
    constructor(uiApi: UiApi);
    onDisplayMessage(source: MessageSource[], message: IStringSection[]): void;
    protected sendMessage(): void;
    protected getID(): string;
    protected getName(): UiTranslation;
}
