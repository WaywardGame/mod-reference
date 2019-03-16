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
import IPlayer from "entity/player/IPlayer";
import { IQuest, QuestType } from "entity/player/quest/quest/IQuest";
import { IHookHost } from "mod/IHookHost";
import Emitter from "utilities/Emitter";
import Stream from "utilities/stream/Stream";
export default class QuestManager extends Emitter implements IHookHost {
    private readonly host;
    private readonly quests;
    private readonly hookTriggers;
    private readonly hostTriggers;
    private readonly initializedQuests;
    constructor(host: IPlayer);
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
    onPlayerJoin(player: IPlayer): void;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    private init;
    private onUpdateRequirement;
    private onCompleteRequirement;
}
export declare const enum QuestManagerEvent {
    /**
     * Emitted when a quest is completed.
     * @param quest The completed `IQuestInstance`
     */
    QuestComplete = 0,
    /**
     * Emitted when a new quest is added.
     * @param quest The `IQuestInstance` that was added
     */
    QuestGet = 1,
    /**
     * Emitted when a quest is updated (a requirement is updated)
     * @param quest The `IQuestInstance` that was updated
     */
    QuestUpdate = 2,
    /**
     * Emitted when a quest requirement is completed
     * @param quest The `IQuestInstance` of the requirement which was updated
     * @param requirement The `IRequirementInstance` that was updated
     */
    RequirementMet = 3
}
export declare class QuestInstance extends Emitter {
    readonly host: IPlayer;
    readonly data: IQuest;
    readonly id: number;
    constructor(host: IPlayer, data: IQuest, id: number);
    getTitle(): import("../../../language/Translation").default | undefined;
    getDescription(): import("../../../language/Translation").default | undefined;
    getRequirements(): Stream<import("./quest/Quest").RequirementInstance>;
    needsManualCompletion(): boolean;
    complete(): this;
    getChildren(): Stream<QuestType>;
    getCompletionAmount(): number;
}
