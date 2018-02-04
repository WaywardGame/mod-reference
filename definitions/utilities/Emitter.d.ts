export declare enum EmitterEvent {
    AddHandler = 0,
    CancelHandler = 1,
    CancelAll = 2,
    TriggerEvent = 3,
}
export default class Emitter {
    private subscribers;
    on(events: string | number | Array<string | number>, cb: (emitter: this, ...data: any[]) => any): this;
    once(event: string | number, cb: (emitter: this, ...data: any[]) => any): this;
    trigger(event: string | number, ...data: any[]): Promise<any[]>;
    cancel(events: string | number | Array<string | number>, cb?: (emitter: this, ...data: any[]) => any): void;
    cancelAll(): void;
    waitUntil(event: string | number): Promise<{}>;
}
