/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IPlayer } from "player/IPlayer";
import IFieldOfView from "renderer/fieldofview/IFieldOfView";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { CompiledProgram } from "renderer/Shaders";
import { IBound3 } from "utilities/math/Bound3";
import Vec2 from "utilities/math/Vector2";
export default class FieldOfView implements IFieldOfView {
    private gl;
    radius: number;
    maxRadius: number;
    private readonly subdivisions;
    static hBlurProgram: CompiledProgram;
    static vBlurProgram: CompiledProgram;
    private static shaderProgram;
    private static readonly instance;
    texLight: WebGLTexture;
    texLightOld: WebGLTexture;
    disabled: boolean;
    blurEnabled: boolean;
    computeOffset: Vec2;
    transitionProgress: number;
    private debugRenderer;
    private texLight01;
    private texLight02;
    private texBlurStorage;
    private framebuffer1;
    private framebuffer2;
    private viewQuadVertexArray;
    private viewQuadBuffer;
    private seed;
    private lastAmbientLightLevel;
    private transitionFinishTime;
    static compileShaders(gl: WebGL2RenderingContext): void;
    constructor(gl: WebGL2RenderingContext, radius: number, maxRadius: number, subdivisions?: number);
    resetGl(gl: WebGL2RenderingContext): void;
    updateRadius(radius: number, maxRadius: number): void;
    getTextureSize(): number;
    getSubdivisions(): number;
    tickSeed(): void;
    updateTransitionProgress(): boolean;
    resetTransitionProgress(): void;
    compute(force?: boolean): void;
    createDebugRenderer(): ITextureDebugRenderer;
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, lightLevel?: number): boolean;
    getBounds(player: IPlayer, radius?: number): IBound3;
    private updateExplored;
    private computeLights;
}
