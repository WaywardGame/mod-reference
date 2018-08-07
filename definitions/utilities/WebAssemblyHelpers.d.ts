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
declare module WebAssemblyHelpers {
    enum Module {
        FlowField = 0,
        FieldOfView = 1
    }
    interface IWebAssemblyModuleInstance {
        imports: IWebAssemblyImports;
        exports: any;
        instance: any;
        memoryBuffer: ArrayBuffer;
    }
    interface IWebAssemblyImports {
        env: IWebAssemblyImportsEnvironment;
    }
    interface IWebAssemblyImportsEnvironment {
        memoryBase: number;
        tableBase: number;
        memory: any;
        table: any;
    }
    function isAvailable(): boolean;
    function loadAndCompileModules(): void;
    function initializeInstance(moduleId: Module, id: number, imports?: any): IWebAssemblyModuleInstance | undefined;
}
export default WebAssemblyHelpers;
