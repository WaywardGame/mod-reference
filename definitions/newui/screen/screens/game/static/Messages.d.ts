import { UiTranslation } from "language/ILanguage";
import { Message, MessageType } from "language/IMessages";
import { IHookHost } from "mod/IHookHost";
import { UiApi } from "newui/INewUi";
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/element/QuadrantComponent";
import { IStringSection } from "utilities/string/Interpolator";
export default class Messages extends QuadrantComponent implements IHookHost {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    private readonly sendButton;
    private readonly input;
    private readonly notes;
    private readonly log;
    constructor(uiApi: UiApi);
    onDisplayMessage(message: string | Message | IStringSection[], messageType?: MessageType, ...args: any[]): undefined;
    protected getID(): string;
    protected getName(): UiTranslation;
}
