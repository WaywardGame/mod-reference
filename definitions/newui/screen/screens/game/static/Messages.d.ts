/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { Bindable } from "Enums";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { ContextMenuOptionKeyValuePair } from "newui/component/ContextMenu";
import Input from "newui/component/Input";
import { UiApi } from "newui/INewUi";
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import IGameScreenApi, { IMessages, IPinnedMessage, MessageTimestamp, PinType, QuadrantComponentId } from "newui/screen/screens/game/IGameScreenApi";
import { IMessage, Source } from "player/IMessageManager";
import IPlayer from "player/IPlayer";
import { RequirementInstance } from "player/quest/quest/Quest";
import { QuestInstance } from "player/quest/QuestManager";
import { IStringSection } from "utilities/string/Interpolator";
export declare const DEFAULT_MAX_MESSAGES = 30;
export interface IMessageFilter {
    name: string;
    allowedSources: Source[];
}
export default class Messages extends QuadrantComponent<false> implements IHookHost, IMessages {
    static preferredQuadrant: Quadrant;
    static sendChatMessage(sender: IPlayer, message: string): typeof Messages;
    static readonly allFilterName: string;
    private static readonly defaultFilters;
    readonly preferredQuadrant: Quadrant;
    readonly sendButton: Button;
    readonly pinnedMessages: Component;
    readonly log: Component;
    readonly input: Input;
    readonly filter: Button;
    pinNotesAutomatically: boolean;
    filters: {
        [key: string]: string[];
    };
    private selectedFilter;
    private showSendButton;
    private showOptionsButton;
    private messageTimestamps;
    private maxMessages;
    private readonly pinnedNotes;
    private readonly seenNotes;
    private readonly pinnedQuestRequirements;
    private readonly messagesToDisplay;
    constructor(api: IGameScreenApi | UiApi);
    getID(): QuadrantComponentId;
    getName(): IStringSection[];
    getPins(): IterableIterator<IPinnedMessage>;
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
    private unpinRequirement;
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
    constructor(api: UiApi, type: PinType, id: any);
}
