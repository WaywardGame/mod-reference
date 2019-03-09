/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
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
