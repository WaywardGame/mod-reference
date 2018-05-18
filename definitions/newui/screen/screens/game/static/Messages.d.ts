import { MessageSource } from "game/IMessageManager";
import { UiTranslation } from "language/ILanguage";
import { IHookHost } from "mod/IHookHost";
import { IOptionDescription } from "newui/component/ContextMenu";
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import IGameScreenApi, { QuadrantComponentId } from "newui/screen/screens/game/IGameScreenApi";
import { IStringSection } from "utilities/string/Interpolator";
export default class Messages extends QuadrantComponent implements IHookHost {
    private readonly gsapi;
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    private readonly sendButton;
    private readonly notes;
    private readonly log;
    private readonly input;
    constructor(gsapi: IGameScreenApi);
    onDisplayMessage(source: MessageSource[], message: IStringSection[]): void;
    scrollToNewest(): void;
    getID(): QuadrantComponentId;
    protected getName(): UiTranslation;
    protected sendMessage(): void;
    protected getContextMenuDescription(): Array<[number | string, IOptionDescription]>;
}
