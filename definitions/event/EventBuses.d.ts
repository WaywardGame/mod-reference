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
import { IPlayerEvents } from "entity/player/IPlayer";
import { IEventEmitterHost, IEventEmitterHostClass } from "event/EventEmitter";
import { IGameEvents } from "game/IGame";
import { ILanguageEvents } from "language/LanguageManager";
import { IModManagerEvents } from "mod/IModManager";
import { IMultiplayerEvents } from "multiplayer/IMultiplayer";
import { IUiEvents } from "newui/NewUi";
import { ISteamworksEvents } from "steamworks/ISteamworks";
export declare enum EventBus {
    Game = 0,
    Ui = 1,
    Language = 2,
    Multiplayer = 3,
    Steamworks = 4,
    Mods = 5,
    Players = 6,
    LocalPlayer = 7
}
declare const eventBuses: {
    [EventBus.Game](): IEventEmitterHostClass<IGameEvents>;
    [EventBus.Language](): IEventEmitterHostClass<ILanguageEvents>;
    [EventBus.Ui](): IEventEmitterHostClass<IUiEvents>;
    [EventBus.Multiplayer](): IEventEmitterHostClass<IMultiplayerEvents>;
    [EventBus.Steamworks](): IEventEmitterHostClass<ISteamworksEvents>;
    [EventBus.Mods](): IEventEmitterHostClass<IModManagerEvents>;
    [EventBus.Players](): IEventEmitterHostClass<IPlayerEvents>;
    [EventBus.LocalPlayer](): IEventEmitterHost<IPlayerEvents>;
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
export declare type EventHandlerFromIndex<I extends EventBus, K extends string | number | symbol> = PropertyOf<Events<ReturnType<(typeof eventBuses)[I]>>, K>;
