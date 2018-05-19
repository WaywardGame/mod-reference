export declare enum EmitterEvent {
    AddHandler = 0,
    CancelHandler = 1,
    CancelAll = 2,
    TriggerEvent = 3,
}
export default class Emitter {
    private subscribers;
    /**
     * Binds an event handler on the given event or events. If the event handler is already bound to one
     * of the given events, does nothing.
     */
    on(events: string | number | Array<string | number>, cb: (emitter: this, ...data: any[]) => any): this;
    /**
     * Binds an event handler to the given event. The event handler will be removed after the first trigger.
     */
    once(event: string | number, cb: (emitter: this, ...data: any[]) => any): this;
    /**
     * Triggers the given event with any number of arguments.
     */
    trigger(event: string | number, ...data: any[]): Promise<any[]>;
    triggerSync<T = any>(event: string | number, ...data: any[]): T[];
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
    waitUntil(event: string | number): Promise<any[]>;
}
