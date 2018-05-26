import { Bindable } from "Enums";
import { MessageSource } from "game/IMessageManager";
import { IMessage } from "game/MessageManager";
import { UiTranslation } from "language/ILanguage";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { IOptionDescription } from "newui/component/ContextMenu";
import Input from "newui/component/Input";
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import IGameScreenApi, { QuadrantComponentId } from "newui/screen/screens/game/IGameScreenApi";
export interface IMessageFilter {
    name: string;
    allowedSources: MessageSource[];
}
export default class Messages extends QuadrantComponent implements IHookHost {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    readonly sendButton: Button;
    readonly notes: Component;
    readonly log: Component;
    readonly input: Input;
    readonly filter: Button;
    filters: {
        [key: string]: MessageSource[];
    };
    private selectedFilter;
    constructor(gsapi: IGameScreenApi);
    onDisplayMessage(message: IMessage, addBackwards?: boolean): void;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    scrollToNewest(): void;
    getID(): QuadrantComponentId;
    protected getName(): UiTranslation;
    protected sendMessage(): boolean;
    protected getContextMenuDescription(): Array<[number | string, IOptionDescription]>;
    private getMessagesContextMenu();
    private runCommand(message);
    private openFilterMenu();
    private changeFilter(filterName);
    private resetFilterText();
    /**
     * Returns `true` if the message should not be displayed.
     */
    private isMessageFiltered(sources);
}
