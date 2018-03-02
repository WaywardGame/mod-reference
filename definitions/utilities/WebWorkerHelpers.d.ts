export declare module WebWorkerHelpers {
    class WebWorker {
        private worker;
        private blobUrl;
        private callback;
        constructor(workerFunction: (data: any) => void);
        getWorker(): Worker;
        setCallback(callback: (evt: any) => void): void;
        free(): void;
    }
    function create(workerFunction: (data: any) => void, messageCallbackFunction: (evt: any) => void): Worker;
    function createReusable(workerFunction: (data: any) => void): WebWorker;
    function enumToString(name: string, values: any, withStrings?: boolean): string;
    function moduleToString(moduleName: string, name: string, moduleToConvert: any, globalVariables?: string[]): string;
}
