export declare function loadShaders(): Promise<void>;
export declare function compileShaders(): void;
export declare class CompiledProgram {
    private readonly gl;
    private readonly vertexName;
    private readonly fragmentName;
    program: WebGLProgram;
    uniforms: {
        [index: string]: number;
    };
    attribs: {
        [index: string]: number;
    };
    constructor(gl: WebGL2RenderingContext, vertexName: string, fragmentName: string);
    compileProgram(): void;
}
