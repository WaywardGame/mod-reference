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
export default class Emitter {
    private subscribers;
    /**
     * Binds an event handler on the given event or events. If the event handler is already bound to one
     * of the given events, does nothing.
     */
    on<D extends any[] = any[]>(events: string | number | Array<string | number>, cb: (emitter: this, ...data: D) => any): this;
    /**
     * Binds an event handler to the given event. The event handler will be removed after the first trigger.
     */
    once<D extends any[] = any[]>(events: string | number | Array<string | number>, cb: (emitter: this, ...data: D) => any): this;
    /**
     * Triggers the given event with any number of arguments.
     */
    emitAsync(event: string | number, ...data: any[]): Promise<any[]>;
    emit<T extends any[]>(event: string | number, ...data: any[]): T;
    /**
     * Removes all event handlers for the given event(s).
     */
    cancel(events: string | number | Array<string | number>): this;
    /**
     * Removes the given event handler for the given event(s).
     */
    cancel(events: string | number | Array<string | number>, cb: (emitter: this, ...data: any[]) => any): this;
    /**
     * Removes all event handlers.
     */
    cancelAll(): this;
    /**
     * Returns a promise that will resolve when the event is triggered.
     */
    waitUntil(events: string | number | Array<string | number>): Promise<any[]>;
    /**
     * Until the given event happens, allows you to bind an event to another emitter.
     */
    until(untilEvents: string | number | Array<string | number>): IEmitterUntil<this>;
}
export interface IEmitterUntil<T> {
    /**
     * Binds the given events on the given emitter. Removed when the `until` event occurs. Returns the original emitter.
     */
    bind<D extends any[] = any[], E2 extends Emitter = Emitter>(emitter: E2, events: string | number | Array<string | number>, cb: (emitter: E2, ...data: D) => any): T;
}
