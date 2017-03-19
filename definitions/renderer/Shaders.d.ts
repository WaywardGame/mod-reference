export declare function loadShaders(callback: () => void): void;
export declare function compileShaders(): void;
export declare class CompiledProgram {
    private gl;
    private vertexName;
    private fragmentName;
    program: WebGLProgram;
    uniforms: {
        [index: string]: number;
    };
    attribs: {
        [index: string]: number;
    };
    constructor(gl: WebGLRenderingContext, vertexName: string, fragmentName: string);
    compileProgram(): void;
}
