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
import { IRequirementApi } from "player/quest/requirement/IRequirement";
import Emitter from "utilities/Emitter";
export declare type RequirementApi<R extends Requirement<any, any>> = R extends Requirement<infer O, infer D> ? IRequirementApi<O, D> : never;
export declare class Requirement<O extends any[] = [], D extends {} = {}> extends Emitter {
    readonly defaultData: D;
    private readonly triggers;
    private readonly externalTriggers;
    private translation?;
    constructor(defaultData: D);
    // @ts-ignore
	setTrigger<H extends Hook>(hook: H, checker: (api: RequirementApi<this>, ...args: ArgumentsOf<Mod[H]>) => boolean): this;
    getTriggers(): IterableIterator<[Hook, (api: IRequirementApi<O, D>, ...args: any[]) => boolean]>;
    setExternalTrigger(emitter: Emitter, ...events: Array<string | number>): this;
    setTranslation(translation: Translation | ((api: RequirementApi<this>) => Translation)): this;
    getTranslation(api: RequirementApi<this>): Translation;
    protected validateOptions(...options: O): boolean;
}
