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
import actionDescriptions from "action/Actions";
import { ActionArgument, ActionArgumentTupleTypes, ActionArgumentType, ActionType, IActionApi, IActionDescription, IActionParticle, IActionSoundEffect } from "action/IAction";
import { Entity } from "entity/IEntity";
import { IRGB, SfxType, SkillType, TurnType } from "Enums";
import { IItem } from "item/IItem";
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import { MilestoneType } from "player/IMilestone";
export default class ActionExecutor<A extends Array<ActionArgument | ActionArgument[]>, E extends Entity, R> implements IActionApi<E> {
    private readonly action;
    readonly type: number;
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
    static executeMultiplayer(packet: ActionPacket, actionExecutor?: ActionExecutor<Array<ActionArgument | ActionArgument[]>, Entity, any>): any;
    private _executor;
    readonly executor: E;
    private isNestedAction;
    private executionStage;
    private delay?;
    private passTurn;
    private updateTablesAndWeight;
    private staminaReduction?;
    private reputationChange;
    private milestone?;
    private skillGain?;
    private sfx?;
    private particle?;
    private updateView?;
    private updateRender?;
    private readonly usedItems;
    private constructor();
    execute(executor: E, ...args: ActionArgumentTupleTypes<A>): R;
    isArgumentType<AA extends ActionArgument>(argument: any, index: number, argumentType: AA): argument is ActionArgumentType<AA>;
    get<D extends IActionDescription>(action: D): D extends IActionDescription<infer A2, infer E2, infer R2> ? ActionExecutor<A2, E2, R2> : never;
    get<T extends ActionType>(action: T): (typeof actionDescriptions)[T] extends IActionDescription<infer A2, infer E2, infer R2> ? ActionExecutor<A2, E2, R2> : never;
    setDelay(delay: number, replace?: boolean): this;
    setPassTurn(turnType?: TurnType): this;
    setUpdateView(updateFov?: boolean): this;
    setUpdateRender(): this;
    setUpdateTablesAndWeight(): this;
    setStaminaReduction(reduction?: SkillType): this;
    setReputationChange(amount: number): this;
    setSkillGain(skill: SkillType, amount?: number): this;
    setMilestone(milestone: MilestoneType, data?: number): this;
    setSoundEffect(soundEffect: IActionSoundEffect): this;
    setSoundEffect(type: SfxType, inFront?: boolean): this;
    setParticle(color: IRGB, inFront?: boolean): this;
    setParticle(color: IRGB, count?: number, inFront?: boolean): this;
    setParticle(particle: IActionParticle): this;
    addUsedItems(...items: IItem[]): Promise<boolean>;
    removeUsedItems(...items: IItem[]): this;
    private executeInternalOrMultiplayer;
    private executeInternal;
    private handleApi;
    private canExecute;
    private isUsableWhen;
}
export declare function getArgumentType(executor: Entity, expected: ActionArgument[], actual: unknown): ActionArgument | undefined;