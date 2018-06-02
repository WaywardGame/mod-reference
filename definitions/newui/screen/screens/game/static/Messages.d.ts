import { Bindable } from "Enums";
import { MessageSource } from "game/IMessageManager";
import { IMessage } from "game/MessageManager";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { IOptionDescription } from "newui/component/ContextMenu";
import { TranslationGenerator } from "newui/component/IComponent";
import Input from "newui/component/Input";
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import IGameScreenApi, { QuadrantComponentId } from "newui/screen/screens/game/IGameScreenApi";
import { IStringSection } from "utilities/string/Interpolator";
export interface IMessageFilter {
    name: string;
    allowedSources: MessageSource[];
}
export default class Messages extends QuadrantComponent implements IHookHost {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    readonly sendButton: Button;
    readonly pinnedMessages: Component;
    readonly log: Component;
    readonly input: Input;
    readonly filter: Button;
    filters: {
        [key: string]: MessageSource[];
    };
    private selectedFilter;
    constructor(gsapi: IGameScreenApi);
    getID(): QuadrantComponentId;
    getName(): IStringSection[];
    scrollToNewest(): void;
    sendPinnedMessage(message: TranslationGenerator, onActivate: () => any): void;
    onDisplayMessage(message: IMessage, addBackwards?: boolean): void;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    onWrittenNote(id: number): void;
    /**
     * Event handler for when the text in the chat box should be sent as a message.
     */
    protected sendMessage(): boolean;
    /**
     * Returns the context menu for messages, used by the superclass (quadrant component)
     */
    protected getContextMenuDescription(): Array<[number | string, IOptionDescription]>;
    /**
     * Returns the basic context menu of messages, no matter what location it is in
     */
    private getMessagesContextMenu();
    /**
     * Runs a command that the user sent instead of sending it as a message.
     */
    private runCommand(message);
    /**
     * Returns `true` if the message should not be displayed.
     */
    private isMessageFiltered(sources);
    /**
     * Event handler for when the filter button is clicked
     */
    private openFilterMenu();
    /**
     * Changes the message filter
     */
    private changeFilter(filterName);
    private onPinnedMessageActivate(pinnedMessage);
    private showNote(note);
}
