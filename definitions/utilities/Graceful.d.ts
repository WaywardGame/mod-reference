import { Source } from "utilities/Log";
export declare class Graceful<T> {
    private ifFailReturn;
    private errorMessage;
    private sources;
    constructor(...sources: Array<string | Source>);
    setFailureReturn(failureReturn: T): this;
    setErrorMessage(message: string): this;
    setSources(...sources: Array<Source | string>): this;
    execute<T1 = any>(functionToCallGracefully: (arg1: T1, ...args: any[]) => T): (...args: any[]) => any;
}
