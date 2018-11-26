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
import { Hook } from "mod/IHookManager";
import Mod from "mod/Mod";
import Emitter from "utilities/Emitter";
export default class Requirement<O extends any[] = [], G extends Goal<O> = Goal<O>> {
    private readonly triggers;
    private readonly externalTriggers;
    getTriggers(): IterableIterator<[Hook, (...args: any[]) => boolean]>;
    getExternalTriggers(): IterableIterator<[Emitter, (string | number)[]]>;
    setTrigger<H extends Hook>(hook: H, checker: (goal: G, ...args: ArgumentsOf<Mod[H]>) => boolean): this;
    setExternalTrigger(emitter: Emitter, ...events: Array<string | number>): this;
    createGoal(...options: O): Goal;
    protected validateOptions(...options: O): boolean;
    protected getGoalClass(): new (requirement: Requirement<O>, ...options: O) => G;
}
export declare class Goal<O extends any[] = any> extends Emitter {
    static readonly IMPOSSIBLE: Goal;
    protected readonly options: O;
    private readonly triggers;
    constructor(requirement: Requirement<O>, ...options: O);
    private setTrigger;
    private setExternalTrigger;
    private trigger;
}
export declare enum RequirementEvent {
    Met = 0
}
