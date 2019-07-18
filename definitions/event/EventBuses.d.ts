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
import Player from "entity/player/Player";
import { IEventEmitterHost, IEventEmitterHostClass } from "event/EventEmitter";
import Game from "game/Game";
import ItemManager from "item/ItemManager";
import LanguageManager from "language/LanguageManager";
import ModManager from "mod/ModManager";
import Multiplayer from "multiplayer/Multiplayer";
import NewUi from "newui/NewUi";
import Steamworks from "steamworks/Steamworks";
export declare enum EventBus {
    Game = 0,
    Ui = 1,
    Language = 2,
    Multiplayer = 3,
    Steamworks = 4,
    Mods = 5,
    Players = 6,
    LocalPlayer = 7,
    Items = 8
}
declare const eventBuses: {
    [EventBus.Game](): typeof Game;
    [EventBus.Language](): typeof LanguageManager;
    [EventBus.Ui](): typeof NewUi;
    [EventBus.Multiplayer](): typeof Multiplayer;
    [EventBus.Steamworks](): typeof Steamworks;
    [EventBus.Mods](): typeof ModManager;
    [EventBus.Players](): typeof Player;
    [EventBus.Items](): typeof ItemManager;
    [EventBus.LocalPlayer](): Player;
};
export default eventBuses;
export declare module EventBus {
    function register<E extends EventBus>(eventBus: E, classOrHost: ReturnType<(typeof eventBuses)[E]>): void;
    function register(eventBus: EventBus): (constructor: NullaryClass<any>) => void;
    function onEventBusRegistration(eventBus: EventBus, handler: NullaryFunction): void;
    function subscriber<S extends NullaryClass<any>>(constructor: S): S;
}
export declare type Events<T> = T extends IEventEmitterHost<infer E> ? E : T extends IEventEmitterHostClass<infer E> ? E : never;
export declare type EventNameFromIndex<I extends EventBus> = keyof Events<ReturnType<(typeof eventBuses)[I]>>;
export declare type EventHandlerFromIndex<I extends EventBus, K extends string | number | symbol> = Handler<HostFromHostOrHostClass<ReturnType<(typeof eventBuses)[I]>>, PropertyOf<Events<ReturnType<(typeof eventBuses)[I]>>, K>>;
declare type ArgsOf<F> = ArgumentsOf<Extract<F, AnyFunction>>;
declare type ReturnOf<F> = ReturnType<Extract<F, AnyFunction>>;
declare type Handler<H, F> = (host: H, ...args: ArgsOf<F>) => ReturnOf<F>;
declare type HostFromHostOrHostClass<H extends IEventEmitterHost<any> | IEventEmitterHostClass<any>> = H extends IEventEmitterHost<any> ? H : InstanceOf<Extract<H, IEventEmitterHostClass<any>>>;
