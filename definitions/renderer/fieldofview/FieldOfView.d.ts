import Vec2 = TSM.vec2;
import { IPlayer } from "player/IPlayer";
import IFieldOfView from "renderer/fieldofview/IFieldOfView";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { CompiledProgram } from "renderer/Shaders";
import * as Utilities from "Utilities";
export default class FieldOfView implements IFieldOfView {
    private gl;
    radius: number;
    private subdivisions;
    static hBlurProgram: CompiledProgram;
    static vBlurProgram: CompiledProgram;
    private static shaderProgram;
    private static instance;
    maxRadius: number;
    texLight: WebGLTexture;
    texLightOld: WebGLTexture;
    disabled: boolean;
    blurEnabled: boolean;
    computeOffset: Vec2;
    private debugRenderer;
    private texLight01;
    private texLight02;
    private texBlurStorage;
    private framebuffer1;
    private framebuffer2;
    private viewQuadVertexArray;
    private seed;
    static compileShaders(gl: WebGL2RenderingContext): void;
    constructor(gl: WebGL2RenderingContext, radius: number, subdivisions?: number);
    getTextureSize(): number;
    getSubdivisions(): number;
    tickSeed(): void;
    compute(force?: boolean): boolean;
    createDebugRenderer(): ITextureDebugRenderer;
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, lightLevel?: number): boolean;
    getBounds(player: IPlayer, radius?: number): Utilities.Bound3;
    private updateExplored();
    private computeLights();
}
