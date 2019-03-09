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
import Translation from "language/Translation";
import IPlayer from "player/IPlayer";
import { IQuest, QuestType } from "player/quest/quest/IQuest";
import { IRequirement, IRequirementApi, RequirementType } from "player/quest/requirement/IRequirement";
import { RequirementArgs } from "player/quest/Requirements";
import Emitter from "utilities/Emitter";
export declare const enum QuestEvent {
    Update = 0,
    RequirementCompleted = 1,
    Complete = 2
}
export declare class Quest extends Emitter {
    type?: QuestType | undefined;
    title?: Translation | ((quest: IQuest) => Translation);
    description?: Translation | ((quest: IQuest) => Translation);
    private readonly requirements;
    private readonly children;
    private readonly requirementInstances;
    private _needsManualCompletion;
    constructor(type?: QuestType | undefined);
    addRequirement<R extends RequirementType>(type: R, ...args: RequirementArgs<R>): this;
    addRequirement<RA extends any[]>(type: RequirementType, ...args: RA): this;
    setNeedsManualCompletion(): this;
    addChildQuests(...children: QuestType[]): this;
    getChildren(): IterableIterator<QuestType>;
    setTitle(translation?: Translation | ((quest: IQuest) => Translation)): this;
    setDescription(translation?: Translation): this;
    create(type?: QuestType | undefined): IQuest;
    getTitle(quest: IQuest): Translation | undefined;
    getDescription(quest: IQuest): Translation | undefined;
    getTriggers(instance: IQuest): IterableIterator<[IRequirement<any[], {}>, IterableIterator<[import("../../../mod/IHookManager").Hook, (api: IRequirementApi<[], {}>, ...args: any[]) => boolean]>]>;
    getHostTriggers(instance: IQuest): IterableIterator<[IRequirement<any[], {}>, IterableIterator<[string | number, (api: IRequirementApi<[], {}>, ...args: any[]) => boolean]>]>;
    getRequirements(host: IPlayer, instance: IQuest): IterableIterator<RequirementInstance>;
    getRequirement(host: IPlayer, quest: IQuest, requirement: IRequirement): RequirementInstance | undefined;
    needsManualCompletion(): boolean;
    protected createRequirements(): IterableIterator<IRequirement<any[], {}>>;
    protected createRequirement<R extends RequirementType>(type: R, ...options: RequirementArgs<R>): IRequirement<RequirementArgs<R>>;
}
export declare class RequirementInstance extends Emitter {
    readonly data: IRequirement;
    readonly id: number;
    private readonly api;
    constructor(host: IPlayer, data: IRequirement, id: number);
    triggerInitialization(): boolean;
    getTranslation(): Translation;
    getCompletionAmount(): number;
    getRelations(): [import("../../../newui/component/IComponent").HighlightType, string | number][];
    setVisible(): this;
}
