export default class Promise2<T = void> {
    private _promise?;
    private _resolvers;
    private _rejectors;
    constructor();
    readonly hasCompleted: boolean;
    complete(value?: T | PromiseLike<T>): void;
    reject(reason?: any): void;
    untilCompleted(): Promise<any>;
    static all(...promises: Array<Promise2<any>>): Promise<void>;
}
