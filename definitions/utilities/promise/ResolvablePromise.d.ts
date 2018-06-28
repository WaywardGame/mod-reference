export declare type IResolve<T> = (value?: T | PromiseLike<T> | undefined) => void;
export declare type IReject = (reason?: any) => void;
export default class ResolvablePromise<T = void> extends Promise<T> {
    readonly resolve: IResolve<T>;
    readonly reject: IReject;
    private _isResolved;
    readonly isResolved: boolean;
    constructor(executor?: (resolve: IResolve<T>, reject: IReject) => void);
}
