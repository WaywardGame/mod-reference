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
import Player from "entity/player/Player";
import { IQuest, QuestType } from "entity/player/quest/quest/IQuest";
import { RequirementInstance } from "entity/player/quest/quest/Quest";
import EventEmitter from "event/EventEmitter";
import { IHookHost } from "mod/IHookHost";
import Stream from "utilities/stream/Stream";
export default class QuestManager extends EventEmitter.Host<IQuestManagerEvents> implements IHookHost {
    private readonly host;
    private readonly quests;
    private readonly hookTriggers;
    private readonly hostTriggers;
    private readonly initializedQuests;
    constructor(host: Player);
    /**
     * Get all quests
     */
    getQuests(): QuestInstance[];
    /**
     * Get all quests of the given type
     */
    getQuests(type: QuestType): QuestInstance[];
    add(type: QuestType): this;
    /**
     * Removes all quests & disposes of any quest requirement triggers
     */
    reset(): this;
    complete(questInstance: QuestInstance): boolean;
    onPlayerJoin(player: Player): void;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    private init;
    private onUpdateRequirement;
    private onCompleteRequirement;
}
export interface IQuestManagerEvents {
    /**
     * Emitted when a quest is completed.
     * @param quest The completed `IQuestInstance`
     */
    questComplete(quest: QuestInstance): any;
    /**
     * Emitted when a new quest is added.
     * @param quest The `IQuestInstance` that was added
     */
    questGet(quest: QuestInstance): any;
    /**
     * Emitted when a quest is updated (a requirement is updated)
     * @param quest The `IQuestInstance` that was updated
     */
    questUpdate(quest: QuestInstance): any;
    /**
     * Emitted when a quest requirement is completed
     * @param quest The `IQuestInstance` of the requirement which was updated
     * @param requirement The `IRequirementInstance` that was updated
     */
    requirementMet(quest: QuestInstance, requirement: RequirementInstance): any;
}
export declare class QuestInstance extends EventEmitter.Host<IQuestInstanceEvents> {
    readonly host: Player;
    readonly data: IQuest;
    readonly id: number;
    constructor(host: Player, data: IQuest, id: number);
    getTitle(): import("../../../language/Translation").default | undefined;
    getDescription(): import("../../../language/Translation").default | undefined;
    getRequirements(): Stream<RequirementInstance>;
    needsManualCompletion(): boolean;
    complete(): this;
    getChildren(): Stream<QuestType>;
    getCompletionAmount(): number;
}
interface IQuestInstanceEvents {
    update(): any;
    manualCompletion(): any;
    complete(): any;
}
export {};
