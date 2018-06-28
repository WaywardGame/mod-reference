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
