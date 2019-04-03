/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IMessage, Source } from "entity/player/IMessageManager";
import IPlayer from "entity/player/IPlayer";
import { RequirementInstance } from "entity/player/quest/quest/Quest";
import { QuestInstance } from "entity/player/quest/QuestManager";
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import { IHookHost } from "mod/IHookHost";
import { Bindable, BindCatcherApi } from "newui/BindingManager";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { ContextMenuOptionKeyValuePair } from "newui/component/ContextMenu";
import Input from "newui/component/Input";
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import { IFilters } from "newui/screen/screens/game/dialog/MessagesEditFiltersDialog";
import { IPinnedMessage, MessageTimestamp, PinType, QuadrantComponentId } from "newui/screen/screens/game/IGameScreenApi";
import Stream from "utilities/stream/Stream";
import { IStringSection } from "utilities/string/Interpolator";
export declare const DEFAULT_MAX_MESSAGES = 30;
export interface IMessageFilter {
    name: string;
    allowedSources: Source[];
}
interface IMessagesEvents extends Events<QuadrantComponent> {
    pinQuestRequirement(pin: IPinnedMessage): any;
    unpinQuestRequirement(pin: IPinnedMessage): any;
}
export default class Messages extends QuadrantComponent implements IHookHost {
    static preferredQuadrant: Quadrant;
    static sendChatMessage(sender: IPlayer, message: string): typeof Messages;
    static readonly allFilterName: string;
    private static readonly defaultFilters;
    event: IEventEmitter<this, IMessagesEvents>;
    readonly preferredQuadrant: Quadrant;
    readonly sendButton: Button;
    readonly pinnedMessages: Component;
    readonly log: Component;
    readonly input: Input;
    readonly filter: Button;
    pinNotesAutomatically: boolean;
    filters: IFilters;
    private selectedFilter;
    private showSendButton;
    private showOptionsButton;
    private messageTimestamps;
    private maxMessages;
    private readonly pinnedNotes;
    private readonly seenNotes;
    private readonly pinnedQuestRequirements;
    private readonly messagesToDisplay;
    private readonly chatSentHistory;
    private chatHistoryIndex;
    private pushedCurrentToHistory;
    constructor();
    getID(): QuadrantComponentId;
    getName(): IStringSection[];
    getPins(): Stream<IPinnedMessage>;
    getMessageTimestampMode(): MessageTimestamp;
    setMessageTimestampMode(mode: MessageTimestamp): this;
    shouldShowSendButton(): boolean;
    setShouldShowSendButton(shouldShow: boolean): this;
    shouldShowOptionsButton(): boolean;
    setShouldShowOptionsButton(shouldShow: boolean): this;
    getMaxMessages(): number;
    setMaxMessages(maxMessages: number): this;
    scrollToNewest(): void;
    sendPinnedMessage(pinnedMessage: PinnedMessage): PinnedMessage;
    pinQuestRequirement(quest: QuestInstance, requirement?: RequirementInstance): IPinnedMessage | undefined;
    unpinMessage(pinnedMessage: PinnedMessage, time?: number): Promise<void>;
    onDisplayMessage(player: IPlayer, message: IMessage, addBackwards?: boolean): void;
    onWrittenNote(player: IPlayer, id: number): void;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    /**
     * Event handler for when the text in the chat box should be sent as a message.
     */
    protected sendMessage(): boolean;
    /**
     * Returns the context menu for messages, used by the superclass (quadrant component)
     */
    protected getContextMenuDescription(): ContextMenuOptionKeyValuePair[];
    private addPinnedNote;
    private addPinnedQuestRequirement;
    private onQuestGet;
    private onRequirementComplete;
    private pinRequirementsFromQuest;
    private hasIncompletePinnedRequirementFromAnotherQuest;
    private showOptions;
    private updateMessages;
    private messages;
    /**
     * Returns the basic context menu of messages, no matter what location it is in
     */
    private getMessagesContextMenu;
    /**
     * Runs a command that the user sent instead of sending it as a message.
     */
    private runCommand;
    /**
     * Returns `true` if the message should not be displayed.
     */
    private isMessageFilteredOut;
    /**
     * Event handler for when the filter button is clicked
     */
    private openFilterMenu;
    /**
     * Changes the message filter
     */
    private changeFilter;
    private refreshLog;
    private onShowDialog;
    private onShowNote;
    private editFilters;
    private onFiltersEdited;
    private onFiltersReset;
}
export declare class PinnedMessage extends Button {
    readonly type: PinType;
    readonly id: any;
    constructor(type: PinType, id: any);
}
export {};
