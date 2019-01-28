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
import { ActionArgument, ActionArgumentTupleTypes, ActionUsability, IActionApi, IActionConfirmerApi, IActionDescription, IActionHandlerApi } from "action/IAction";
import { ICreature } from "creature/ICreature";
import { EntityPlayerCreatureNpc, EntityType } from "entity/IEntity";
import { INPC } from "npc/INPC";
import IPlayer from "player/IPlayer";
export declare class Action<A extends Array<ActionArgument | ActionArgument[]>, E extends EntityPlayerCreatureNpc = EntityPlayerCreatureNpc, R = void> implements IActionDescription<A, E, R> {
    readonly argumentTypes: A;
    readonly usability: {
        [key in ActionUsability]?: boolean;
    };
    validExecutors: EntityType[];
    preExecutionHandler?: (actionApi: IActionApi<E>, ...args: ActionArgumentTupleTypes<A>) => any;
    handler: (actionApi: IActionHandlerApi<E>, ...args: ActionArgumentTupleTypes<A>) => R;
    confirmer?: (actionApi: IActionConfirmerApi<E>, ...args: ActionArgumentTupleTypes<A>) => Promise<boolean>;
    constructor(...argumentTypes: A);
    setPreExecutionHandler(handler: (actionApi: IActionApi<E>, ...args: ActionArgumentTupleTypes<A>) => any): this;
    setConfirmer(confirmer: (actionApi: IActionConfirmerApi<E>, ...args: ActionArgumentTupleTypes<A>) => Promise<boolean>): this;
    setHandler<H extends (actionApi: IActionHandlerApi<E>, ...args: ActionArgumentTupleTypes<A>) => any>(handler: H): Action<A, E, H extends (...args: any) => infer R2 ? R2 : void>;
    setUsableWhen(...usabilities: ActionUsability[]): this;
    setUsableBy<E2 extends EntityType[]>(...entityTypes: E2): Action<A, EntityTypeTupleType<E2>>;
    clone(): Action<A, never, R>;
}
declare type EntityTypeType<E extends EntityType> = E extends EntityType.Creature ? ICreature : E extends EntityType.NPC ? INPC : IPlayer;
declare type EntityTypeTupleType<E extends EntityType[]> = E extends [EntityType] ? EntityTypeType<E[0]> : E extends [EntityType, EntityType] ? EntityTypeType<E[0]> | EntityTypeType<E[1]> : E extends [EntityType, EntityType, EntityType] ? EntityTypeType<E[0]> | EntityTypeType<E[1]> | EntityTypeType<E[2]> : never;
export {};
