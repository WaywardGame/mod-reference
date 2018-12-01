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
import { Quest } from "player/quest/quest/Quest";
import Emitter from "utilities/Emitter";
export default class QuestManager extends Emitter {
    private readonly quests;
    addQuest(quest: Quest): this;
}
export declare const enum QuestManagerEvent {
    /**
     * Emitted when a quest is completed.
     * @param quest The completed `Quest`
     */
    QuestComplete = 0,
    /**
     * Emitted when a new quest is added.
     * @param quest The `Quest` that was added
     */
    QuestGet = 1
}
