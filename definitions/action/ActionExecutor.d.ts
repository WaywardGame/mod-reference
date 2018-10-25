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
import { ActionArgument, ActionArgumentTupleTypes, ActionType, IActionApi, IActionDescription, IActionParticle, IActionSoundEffect } from "action/IAction";
import { Entity } from "entity/IEntity";
import { IRGB, SfxType, SkillType, TurnType } from "Enums";
import ActionPacket2 from "multiplayer/packets/shared/ActionPacket2";
import { MilestoneType } from "player/IMilestone";
export default class ActionExecutor<A extends Array<ActionArgument | ActionArgument[]>, E extends Entity, R> implements IActionApi<E> {
    private readonly action;
    readonly type: number;
    /**
     * This field is incremented when the execution of an action begins, and decremented when the execution of an action ends.
     * Therefore, if the value is greater than `0` when the usability of an action is checked, it means this action is a nested
     * action and should be executed regardless of whether it could normally be used.
     */
    private static executing;
    static get<D extends IActionDescription>(action: D): D extends IActionDescription<infer A, infer E, infer R> ? ActionExecutor<A, E, R> : never;
    static get<T extends ActionType>(action: T): (typeof actionDescriptions)[T] extends IActionDescription<infer A, infer E, infer R> ? ActionExecutor<A, E, R> : never;
    static executeMultiplayer(packet: ActionPacket2, actionExecutor?: ActionExecutor<Array<ActionArgument | ActionArgument[]>, Entity, any>): any;
    private _executor;
    readonly executor: E;
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
    private constructor();
    execute(executor: E, ...args: ActionArgumentTupleTypes<A>): R;
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
    private executeInternal;
    private handleApi;
    private canExecute;
    private isUsableWhen;
}
export declare function getArgumentType(executor: Entity, expected: ActionArgument[], actual: unknown): ActionArgument | undefined;
