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
import { IQuestRequirementApi } from "entity/player/quest/requirement/IRequirement";
import { Events } from "event/EventBuses";
import Translation from "language/Translation";
import { Hook } from "mod/IHookManager";
import Mod from "mod/Mod";
import { HighlightSelector } from "newui/component/IComponent";
export declare type QuestRequirementApi<R extends QuestRequirement<any, any>> = R extends QuestRequirement<infer O, infer D> ? IQuestRequirementApi<O, D> : never;
export declare class QuestRequirement<O extends any[] = [], D extends {} = {}> {
    readonly defaultData: D;
    private readonly triggers;
    private readonly hostTriggers;
    private translation?;
    private completionAmountGetter;
    private relationsHandler?;
    private initializeTrigger?;
    constructor(defaultData: D);
    /**
     * @ts-ignore typescript is dumb
     */
    setTrigger<H extends Hook>(hook: H, checker: (api: QuestRequirementApi<this>, ...args: ArgumentsOf<Mod[H]>) => boolean): this;
    getTriggers(): IterableIterator<[Hook, (api: IQuestRequirementApi<O, D>, ...args: any[]) => boolean]>;
    setHostTrigger<E extends keyof Events<IPlayer>>(event: E, checker: (api: QuestRequirementApi<this>, player: IPlayer, ...args: ArgumentsOf<Events<IPlayer>[E]>) => boolean): this;
    getHostTriggers(): IterableIterator<["milestoneUpdate" | "updateOption" | "inventoryItemAdd" | "inventoryItemRemove" | "inventoryItemUpdate" | "processMovement" | "restStart" | "restEnd" | "displayMessage" | "skillChange" | "statChanged" | "statTimerChanged" | "statMaxChanged" | "statBonusChanged" | "statusChange" | "preMove" | "postMove", (api: IQuestRequirementApi<O, D>, player: IPlayer, ...args: any[]) => boolean]>;
    setInitializeTrigger(checker: (api: QuestRequirementApi<this>) => boolean): this;
    getInitializeTrigger(): ((api: QuestRequirementApi<this>) => boolean) | undefined;
    setRelations(relations: HighlightSelector[]): this;
    setRelations(handler: (api: QuestRequirementApi<this>) => HighlightSelector[]): this;
    getRelations(api: QuestRequirementApi<this>): [import("../../../../newui/component/IComponent").HighlightType, string | number][];
    setTranslation(translation: Translation | ((api: QuestRequirementApi<this>) => Translation)): this;
    getTranslation(api: QuestRequirementApi<this>): Translation;
    setCompletionAmountGetter(getter: (api: QuestRequirementApi<this>) => number): this;
    getCompletionAmount(api: QuestRequirementApi<this>): number;
    protected validateOptions(...options: O): boolean;
}
