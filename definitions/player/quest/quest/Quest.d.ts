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
import Translation from "language/Translation";
import { IQuest, QuestType } from "player/quest/quest/IQuest";
import { IRequirement, RequirementType } from "player/quest/requirement/IRequirement";
import { RequirementArgs } from "player/quest/Requirements";
import Emitter from "utilities/Emitter";
export declare const enum QuestEvent {
    Update = 0,
    Complete = 1
}
export declare class Quest extends Emitter {
    readonly type: QuestType;
    title?: Translation | ((quest: IQuest) => Translation);
    description?: Translation | ((quest: IQuest) => Translation);
    private readonly requirements;
    private readonly children;
    constructor(type: QuestType);
    addRequirement<R extends RequirementType>(type: R, ...args: RequirementArgs<R>): this;
    addChildQuests(...children: Quest[]): this;
    getChildren(): IterableIterator<Quest>;
    setTitle(translation?: Translation | ((quest: IQuest) => Translation)): this;
    setDescription(translation?: Translation): this;
    getTitle(quest: IQuest): Translation;
    getDescription(quest: IQuest): Translation;
    create(): IQuest;
    getTriggers(instance: IQuest): IterableIterator<[IRequirement<any[], {}>, IterableIterator<[import("../../../mod/IHookManager").Hook, (api: import("../requirement/IRequirement").IRequirementApi<[], {}>, ...args: any[]) => boolean]>]>;
    protected getRequirements(): IterableIterator<IRequirement<any[], {}>>;
    protected createRequirement<R extends RequirementType>(type: R, ...options: RequirementArgs<R>): IRequirement<RequirementArgs<R>>;
}
