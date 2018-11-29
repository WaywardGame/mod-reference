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
import IEntity from "entity/IEntity";
import Translation from "language/Translation";
import { Hook } from "mod/IHookManager";
import Mod from "mod/Mod";
import IPlayer from "player/IPlayer";
import Emitter from "utilities/Emitter";
export declare const enum RequirementEvent {
    Met = 0,
    Update = 1
}
export default class Requirement<O extends any[] = any> extends Emitter {
    static createImpossible(host: IPlayer): Requirement<[]>;
    protected readonly options: O;
    private readonly triggers;
    private readonly translation?;
    private readonly host;
    constructor(host: IPlayer, factory: RequirementFactory<O>, ...options: O);
    getTranslation(): Translation;
    markUpdated(): void;
    isHost(entity: IEntity): boolean;
    private setTrigger;
    private setExternalTrigger;
    private trigger;
}
export declare class RequirementFactory<O extends any[] = [], R extends Requirement<O> = Requirement<O>> {
    private readonly triggers;
    private readonly externalTriggers;
    private translation?;
    setTrigger<H extends Hook>(hook: H, checker: (requirement: R, ...args: ArgumentsOf<Mod[H]>) => boolean): this;
    getTriggers(): IterableIterator<[Hook, (...args: any[]) => boolean]>;
    setExternalTrigger(emitter: Emitter, ...events: Array<string | number>): this;
    getExternalTriggers(): IterableIterator<[Emitter, (string | number)[]]>;
    setTranslation(translation: Translation): this;
    getTranslation(): Translation | undefined;
    create(host: IPlayer, ...options: O): Requirement;
    protected validateOptions(...options: O): boolean;
    protected getRequirementClass(): new (host: IPlayer, requirement: RequirementFactory<O>, ...options: O) => R;
}
