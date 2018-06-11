import { LogSource } from "utilities/Log";
export declare class Graceful<T> {
    private ifFailReturn;
    private errorMessage;
    private sources;
    constructor(...sources: Array<string | LogSource>);
    setFailureReturn(failureReturn: T): this;
    setErrorMessage(message: string): this;
    setSources(...sources: Array<LogSource | string>): this;
    execute<T1 = any>(functionToCallGracefully: (arg1: T1, ...args: any[]) => T): (...args: any[]) => any;
}
