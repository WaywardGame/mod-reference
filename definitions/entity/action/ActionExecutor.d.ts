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
import { SfxType } from "audio/IAudio";
import actionDescriptions from "entity/action/Actions";
import { ActionArgument, ActionArgumentTupleTypes, ActionArgumentTypeMap, ActionType, IActionApi, IActionDescription, IActionHandlerApi, IActionParticle, IActionSoundEffect } from "entity/action/IAction";
import { EntityPlayerCreatureNpc } from "entity/IEntity";
import { SkillType } from "entity/IHuman";
import { TurnType } from "entity/player/IPlayer";
import EventEmitter from "event/EventEmitter";
import { Milestone } from "game/milestones/IMilestone";
import Item from "item/Item";
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import { IRGB } from "utilities/Color";
interface ActionEvents {
    /**
     * Called before an action is executed
     * This is called before the action result is used
     * @returns False to cancel the action
     */
    preExecuteAction(actionType: ActionType, actionApi: IActionHandlerApi<any>, args: any[]): false | void;
    /**
     * Called after an action has been executed
     * This is called after the action result is used
     */
    postExecuteAction(actionType: ActionType, actionApi: IActionHandlerApi<any>, args: any[]): any;
}
export default class ActionExecutor<A extends Array<ActionArgument | ActionArgument[]>, E extends EntityPlayerCreatureNpc, R> extends EventEmitter.Host<ActionEvents> implements IActionApi<E> {
    /**
     * Gets an action by its description. If you're using the Action class for constructing the descriptions, just pass the action instance.
     *
     * Note: Prefer `IActionApi.get` if you're calling this from within another action.
     */
    static get<D extends IActionDescription>(action: D): D extends IActionDescription<infer A, infer E, infer R> ? ActionExecutor<A, E, R> : never;
    /**
     * Gets an action by its `ActionType`.
     *
     * Note: Prefer `IActionApi.get` if you're calling this from within another action.
     */
    static get<T extends ActionType>(action: T): (typeof actionDescriptions)[T] extends IActionDescription<infer A, infer E, infer R> ? ActionExecutor<A, E, R> : never;
    static executeMultiplayer(packet: ActionPacket, actionExecutor?: ActionExecutor<Array<ActionArgument | ActionArgument[]>, EntityPlayerCreatureNpc, any>): any;
    readonly executor: E;
    readonly actionStack: ActionType[];
    readonly lastAction: ActionType;
    readonly type: ActionType;
    private _executor;
    private _actionStack;
    private executionStage;
    private shouldSkipConfirmation;
    private readonly privateStore;
    private updateTablesAndWeight;
    private staminaReduction?;
    private reputationChange;
    private milestone?;
    private skillGains?;
    private sfx?;
    private particle?;
    private updateView?;
    private updateRender?;
    private readonly items;
    private itemsUsed;
    private readonly action;
    constructor(action?: IActionDescription<A, E>, type?: number | undefined);
    skipConfirmation(): this;
    execute(executor: E, ...args: ActionArgumentTupleTypes<A>): R;
    isArgumentType<AA extends ActionArgument>(argument: any, index: number, argumentType: AA): argument is ActionArgumentTypeMap<AA>;
    get<D extends IActionDescription>(action: D): D extends IActionDescription<infer A2, infer E2, infer R2> ? ActionExecutor<A2, E2, R2> : never;
    get<T extends ActionType>(action: T): (typeof actionDescriptions)[T] extends IActionDescription<infer A2, infer E2, infer R2> ? ActionExecutor<A2, E2, R2> : never;
    setDelay(delay: number, replace?: boolean): this;
    setPassTurn(turnType?: TurnType): this;
    setUpdateView(updateFov?: boolean): this;
    setUpdateRender(): this;
    setUpdateTablesAndWeight(): this;
    setStaminaReduction(reduction?: SkillType): this;
    setReputationChange(amount: number): this;
    addSkillGains(...skills: Array<[SkillType, number?]>): this;
    addSkillGains(skill: SkillType, amount?: number): this;
    setMilestone(milestone: Milestone, data?: number): this;
    setSoundEffect(soundEffect: IActionSoundEffect): this;
    setSoundEffect(type: SfxType, inFront?: boolean): this;
    setParticle(color: IRGB, inFront?: boolean): this;
    setParticle(color: IRGB, count?: number, inFront?: boolean): this;
    setParticle(particle: IActionParticle): this;
    addItems(...addItems: Array<Item | undefined>): this;
    getItems(): import("../../utilities/stream/Stream").default<Item>;
    removeItems(...items: Array<Item | undefined>): this;
    setItemsUsed(used?: boolean): this;
    confirmItemsBroken(): Promise<boolean>;
    private executeConfirmer;
    private executeInternalOrMultiplayer;
    private executeInternal;
    private handleApi;
    private canExecute;
    private isUsableWhen;
}
export declare function getArgumentType(executor: EntityPlayerCreatureNpc, expected: ActionArgument | ActionArgument[], actual: unknown): ActionArgument | undefined;
export {};
