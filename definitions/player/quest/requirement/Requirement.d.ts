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
import { Hook } from "mod/IHookManager";
import Mod from "mod/Mod";
import { HighlightSelector } from "newui/component/IComponent";
import { IRequirementApi } from "player/quest/requirement/IRequirement";
import Emitter from "utilities/Emitter";
export declare type RequirementApi<R extends Requirement<any, any>> = R extends Requirement<infer O, infer D> ? IRequirementApi<O, D> : never;
export declare class Requirement<O extends any[] = [], D extends {} = {}> extends Emitter {
    readonly defaultData: D;
    private readonly triggers;
    private readonly hostTriggers;
    private translation?;
    private completionAmountGetter;
    private relationsHandler?;
    private initializeTrigger?;
    constructor(defaultData: D);
    // @ts-ignore
	// @ts-ignore
	setTrigger<H extends Hook>(hook: H, checker: (api: RequirementApi<this>, ...args: ArgumentsOf<Mod[H]>) => boolean): this;
    getTriggers(): IterableIterator<[Hook, (api: IRequirementApi<O, D>, ...args: any[]) => boolean]>;
    setHostTrigger(event: string | number, checker: (api: RequirementApi<this>, ...args: any[]) => boolean): this;
    getHostTriggers(): IterableIterator<[string | number, (api: IRequirementApi<O, D>, ...args: any[]) => boolean]>;
    setInitializeTrigger(checker: (api: RequirementApi<this>) => boolean): this;
    getInitializeTrigger(): ((api: RequirementApi<this>) => boolean) | undefined;
    setRelations(relations: HighlightSelector[]): this;
    setRelations(handler: (api: RequirementApi<this>) => HighlightSelector[]): this;
    getRelations(api: RequirementApi<this>): [import("../../../newui/component/IComponent").HighlightType, string | number][];
    setTranslation(translation: Translation | ((api: RequirementApi<this>) => Translation)): this;
    getTranslation(api: RequirementApi<this>): Translation;
    setCompletionAmountGetter(getter: (api: RequirementApi<this>) => number): this;
    getCompletionAmount(api: RequirementApi<this>): number;
    protected validateOptions(...options: O): boolean;
}
