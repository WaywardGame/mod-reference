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
import { IEventEmitterHost } from "event/EventEmitter";
export declare enum IndexedEmitter {
    Game = 0,
    LocalPlayer = 1,
    Steamworks = 2,
    Mods = 3
}
declare const indexedEmitters: {
    [IndexedEmitter.Game]: () => import("../game/IGame").IGame;
    [IndexedEmitter.LocalPlayer]: () => any;
    [IndexedEmitter.Steamworks]: () => any;
    [IndexedEmitter.Mods]: () => any;
};
export default indexedEmitters;
export declare type EventNameFromIndex<I extends IndexedEmitter> = ReturnType<(typeof indexedEmitters)[I]> extends IEventEmitterHost<infer E> ? keyof E : never;
export declare type EventHandlerFromIndex<I extends IndexedEmitter, K extends string | number | symbol> = ReturnType<(typeof indexedEmitters)[I]> extends IEventEmitterHost<infer E> ? (E extends {
    [key in K]: any;
} ? E[K] : never) : never;
