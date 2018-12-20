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
import ActionExecutor from "action/ActionExecutor";
import actionDescriptions from "action/Actions";
import { ICorpse } from "creature/corpse/ICorpse";
import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { EntityPlayerCreatureNpc, EntityType } from "entity/IEntity";
import { AttackType, Direction, DoodadType, EquipType, IRGB, ItemQuality, ItemType, RestType, SfxType, SkillType, TurnType } from "Enums";
import { IContainer, IItem } from "item/IItem";
import { INPC } from "npc/INPC";
import { MilestoneType } from "player/IMilestone";
import IPlayer from "player/IPlayer";
import { ITileEvent } from "tile/ITileEvent";
import { IVector2, IVector3 } from "utilities/math/IVector";
export declare enum ActionType {
    Disassemble = 0,
    Pickup = 1,
    Throw = 2,
    Attack = 3,
    StartFire = 4,
    Carve = 5,
    SetDown = 6,
    Eat = 7,
    DrinkItem = 8,
    Rest = 9,
    Sleep = 10,
    Heal = 11,
    Dig = 12,
    Paddle = 13,
    GatherWater = 14,
    Shoot = 15,
    Cast = 16,
    TraverseTheSea = 17,
    LockPick = 18,
    Sling = 19,
    Repair = 20,
    Decode = 21,
    Learn = 22,
    Reinforce = 23,
    Gather = 24,
    StokeFire = 25,
    Pour = 26,
    Plant = 27,
    GatherTreasure = 28,
    Ignite = 29,
    Build = 30,
    OpenContainer = 31,
    Preserve = 32,
    OpenBottle = 33,
    DrinkCure = 34,
    TellTime = 35,
    SailToCivilization = 36,
    Transmogrify = 37,
    Fire = 38,
    Teleport = 39,
    Extinguish = 40,
    DrawMap = 41,
    Dismantle = 42,
    PourOnYourself = 43,
    Squeeze = 44,
    Pet = 45,
    Tame = 46,
    Release = 47,
    HealOther = 48,
    RubClockwise = 49,
    RubCounterclockwise = 50,
    OpenDoor = 51,
    CloseDoor = 52,
    AddFuel = 53,
    Grasp = 54,
    PickupItem = 55,
    PickupAllItems = 56,
    Offer = 57,
    Drop = 58,
    Jump = 59,
    Move = 60,
    MoveTo = 61,
    UpdateDirection = 62,
    Idle = 63,
    DrinkInFront = 64,
    UseItem = 65,
    Equip = 66,
    Unequip = 67,
    MoveItem = 68,
    Craft = 69,
    Till = 70,
    Rename = 71,
    Harvest = 72,
    GatherMilk = 73,
    Read = 74,
    CloseContainer = 75,
    SmotherFire = 76,
    Trade = 77,
    PlaceDown = 78,
    Inspect = 79,
    Apply = 80,
    Hitch = 81,
    Unhitch = 82
}
export declare enum ActionUsability {
    Paused = 0,
    Resting = 1,
    Moving = 2,
    Ghost = 3,
    Delayed = 4
}
export interface IActionDescription<A extends Array<ActionArgument | ActionArgument[]> = Array<ActionArgument | ActionArgument[]>, E extends EntityPlayerCreatureNpc = EntityPlayerCreatureNpc, R = void> {
    type?: number;
    argumentTypes: A;
    usability: {
        [key in ActionUsability]?: boolean;
    };
    validExecutors: EntityType[];
    preExecutionHandler?(actionApi: IActionApi<E>, ...args: ActionArgumentTupleTypes<A>): any;
    handler(actionApi: IActionHandlerApi<E>, ...args: ActionArgumentTupleTypes<A>): R;
    confirmer?(actionApi: IActionConfirmerApi<E>, ...args: ActionArgumentTupleTypes<A>): Promise<boolean>;
    clone(): IActionDescription<A, E, R>;
}
export interface IActionApi<E extends EntityPlayerCreatureNpc = EntityPlayerCreatureNpc> {
    readonly executor: E;
    readonly type: ActionType;
    readonly actionStack: ReadonlyArray<ActionType>;
    readonly lastAction: ActionType;
    isArgumentType<A extends ActionArgument>(argument: any, index: number, argumentType: A): argument is ActionArgumentType<A>;
    get<D extends IActionDescription>(action: D): D extends IActionDescription<infer A, infer E2, infer R> ? ActionExecutor<A, E2, R> : never;
    get<T extends ActionType>(action: T): (typeof actionDescriptions)[T] extends IActionDescription<infer A, infer E2, infer R> ? ActionExecutor<A, E2, R> : never;
    setDelay(delay: number, replace?: boolean): this;
    setPassTurn(turnType?: TurnType): this;
    setUpdateView(updateFov?: boolean): this;
    setUpdateRender(): this;
    setUpdateTablesAndWeight(): this;
    setStaminaReduction(skill?: SkillType): this;
    addSkillGains(...skills: Array<[SkillType, number?]>): this;
    addSkillGains(skill: SkillType, amount?: number): this;
    setSoundEffect(soundEffect: IActionSoundEffect): this;
    setSoundEffect(type: SfxType, inFront?: boolean): this;
    setReputationChange(amount: number): this;
    setMilestone(milestone: MilestoneType, data?: number): this;
    setParticle(color: IRGB, count?: number, inFront?: boolean): this;
    setParticle(color: IRGB, inFront?: boolean): this;
    setParticle(particle: IActionParticle): this;
    /**
     * The items passed to this method will be registered as items potentially to be damaged when the action completes.
     */
    addItems(...items: Array<IItem | undefined>): this;
    /**
     * Returns the items registered for this action via `addItems`.
     */
    getItems(): IterableIterator<IItem>;
    /**
     * Removes all items added via `addItems`
     */
    removeItems(): this;
    /**
     * Removes specific items added by `addItems`
     */
    removeItems(...items: Array<IItem | undefined>): this;
}
export interface IActionHandlerApi<E extends EntityPlayerCreatureNpc = EntityPlayerCreatureNpc> extends IActionApi<E> {
    /**
     * Sets that the items added to this action by `addItems` were "used" (so they will be damaged afterward).
     */
    setItemsUsed(): this;
    /**
     * Sets whether the items added to this action by `addItems` were "used" (IE, whether they will be damaged).
     */
    setItemsUsed(used?: boolean): this;
}
export interface IActionConfirmerApi<E extends EntityPlayerCreatureNpc = EntityPlayerCreatureNpc> extends IActionApi<E> {
    /**
     * If damaging any of the "used items" for this action will result in the item breaking, and this method is
     * called from the `confirmer` of the action, a confirmation dialog will be shown asking if you want to
     * proceed with the action.
     *
     * Note: This is called automatically if items are added in the `preExecutionHandler`. This should only be used in
     * a custom confirmer if new items are added to the action here, and items *aren't* added in the `preExecutionHandler`.
     * Otherwise the player could get two confirmations, and that's annoying.
     */
    confirmItemsBroken(): Promise<boolean>;
}
export interface IActionSoundEffect {
    type: SfxType;
    inFront?: boolean;
    position?: Partial<IVector3>;
    delay?: number;
    speed?: number;
    noPosition?: boolean;
}
export interface IActionParticle {
    color: IRGB;
    position?: Partial<IVector3>;
    count?: number;
    inFront?: boolean;
}
export declare function anyOf<A extends ActionArgument[]>(...actions: A): A;
export declare enum ActionArgument {
    Undefined = 0,
    Null = 1,
    Boolean = 2,
    Number = 3,
    String = 4,
    Array = 5,
    Object = 6,
    ActionType = 7,
    AttackType = 8,
    Container = 9,
    Corpse = 10,
    Creature = 11,
    Direction = 12,
    Doodad = 13,
    DoodadType = 14,
    Entity = 15,
    EquipType = 16,
    Human = 17,
    Item = 18,
    ItemArray = 19,
    ItemArrayInventory = 20,
    ItemArrayNearby = 21,
    ItemInventory = 22,
    ItemNearby = 23,
    ItemQuality = 24,
    ItemType = 25,
    NPC = 26,
    Player = 27,
    RestType = 28,
    TileEvent = 29,
    Vector2 = 30,
    Vector3 = 31
}
export declare type ActionArgumentType<X extends ActionArgument> = X extends ActionArgument.Number ? number : X extends ActionArgument.Undefined ? undefined : X extends ActionArgument.Null ? null : X extends ActionArgument.Boolean ? boolean : X extends ActionArgument.Number ? number : X extends ActionArgument.String ? string : X extends ActionArgument.Array ? any[] : X extends ActionArgument.Object ? any : X extends ActionArgument.AttackType ? AttackType : X extends ActionArgument.Container ? IContainer : X extends ActionArgument.Item ? IItem : X extends ActionArgument.ItemNearby ? IItem : X extends ActionArgument.ItemInventory ? IItem : X extends ActionArgument.ItemArray ? IItem[] : X extends ActionArgument.ItemArrayNearby ? IItem[] : X extends ActionArgument.ItemArrayInventory ? IItem[] : X extends ActionArgument.Doodad ? IDoodad : X extends ActionArgument.Corpse ? ICorpse : X extends ActionArgument.Creature ? ICreature : X extends ActionArgument.NPC ? INPC : X extends ActionArgument.Player ? IPlayer : X extends ActionArgument.Human ? Human : X extends ActionArgument.EquipType ? EquipType : X extends ActionArgument.Direction ? Direction : X extends ActionArgument.ItemQuality ? ItemQuality : X extends ActionArgument.ItemType ? ItemType : X extends ActionArgument.Vector2 ? IVector2 : X extends ActionArgument.Vector3 ? IVector3 : X extends ActionArgument.RestType ? RestType : X extends ActionArgument.ActionType ? ActionType : X extends ActionArgument.DoodadType ? DoodadType : X extends ActionArgument.Entity ? EntityPlayerCreatureNpc : X extends ActionArgument.TileEvent ? ITileEvent : never;
declare type ActionArgumentEntryType<X extends ActionArgument | ActionArgument[]> = X extends ActionArgument ? ActionArgumentType<X> : X extends ActionArgument[] ? ExtractActionArgumentArray<X> : never;
declare type ExtractActionArgumentArray<X extends ActionArgument[]> = X extends [ActionArgument] ? ActionArgumentType<X[0]> : X extends [ActionArgument, ActionArgument] ? ActionArgumentType<X[0]> | ActionArgumentType<X[1]> : X extends [ActionArgument, ActionArgument, ActionArgument] ? ActionArgumentType<X[0]> | ActionArgumentType<X[1]> | ActionArgumentType<X[2]> : X extends [ActionArgument, ActionArgument, ActionArgument, ActionArgument] ? ActionArgumentType<X[0]> | ActionArgumentType<X[1]> | ActionArgumentType<X[2]> | ActionArgumentType<X[3]> : X extends [ActionArgument, ActionArgument, ActionArgument, ActionArgument, ActionArgument] ? ActionArgumentType<X[0]> | ActionArgumentType<X[1]> | ActionArgumentType<X[2]> | ActionArgumentType<X[3]> | ActionArgumentType<X[4]> : never;
export declare type ActionArgumentTupleTypes<X extends Array<ActionArgument | ActionArgument[]>> = X extends [] ? [] : X extends [ActionArgument | ActionArgument[]] ? Tuple1<ActionArgumentEntryType<X[0]>> : X extends [ActionArgument | ActionArgument[], ActionArgument | ActionArgument[]] ? Tuple2<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>> : X extends [ActionArgument | ActionArgument[], ActionArgument | ActionArgument[], ActionArgument | ActionArgument[]] ? Tuple3<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>, ActionArgumentEntryType<X[2]>> : X extends [ActionArgument | ActionArgument[], ActionArgument | ActionArgument[], ActionArgument | ActionArgument[], ActionArgument | ActionArgument[]] ? Tuple4<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>, ActionArgumentEntryType<X[2]>, ActionArgumentEntryType<X[3]>> : X extends [ActionArgument | ActionArgument[], ActionArgument | ActionArgument[], ActionArgument | ActionArgument[], ActionArgument | ActionArgument[], ActionArgument | ActionArgument[]] ? Tuple5<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>, ActionArgumentEntryType<X[2]>, ActionArgumentEntryType<X[3]>, ActionArgumentEntryType<X[4]>> : never;
export declare type Tuple1<X1> = undefined extends X1 ? [X1?] : [X1];
export declare type Tuple2<X1, X2> = undefined extends X2 ? (undefined extends X1 ? [X1?, X2?] : [X1, X2?]) : [X1, X2];
export declare type Tuple3<X1, X2, X3> = undefined extends X3 ? (undefined extends X2 ? (undefined extends X1 ? [X1?, X2?, X3?] : [X1, X2?, X3?]) : [X1, X2, X3?]) : [X1, X2, X3];
export declare type Tuple4<X1, X2, X3, X4> = undefined extends X4 ? (undefined extends X3 ? (undefined extends X2 ? (undefined extends X1 ? [X1?, X2?, X3?, X4?] : [X1, X2?, X3?, X4?]) : [X1, X2, X3?, X4?]) : [X1, X2, X3, X4?]) : [X1, X2, X3, X4];
export declare type Tuple5<X1, X2, X3, X4, X5> = undefined extends X5 ? (undefined extends X4 ? (undefined extends X3 ? (undefined extends X2 ? (undefined extends X1 ? [X1?, X2?, X3?, X4?, X5?] : [X1, X2?, X3?, X4?, X5?]) : [X1, X2, X3?, X4?, X5?]) : [X1, X2, X3, X4?, X5?]) : [X1, X2, X3, X4, X5?]) : [X1, X2, X3, X4, X5];
export declare type ActionArguments<A extends IActionDescription<any, any>> = A extends IActionDescription<infer AA, any> ? ActionArgumentTupleTypes<AA> : never;
export {};
