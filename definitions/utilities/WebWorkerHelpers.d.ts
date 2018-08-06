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
