import Vec2 = TSM.vec2;
import { IPlayer } from "player/IPlayer";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { CompiledProgram } from "renderer/Shaders";
import { Bound3 } from "Utilities";
export interface IFieldOfView {
    hBlurProgram: CompiledProgram;
    vBlurProgram: CompiledProgram;
    radius: number;
    maxRadius: number;
    texLight: WebGLTexture;
    texLightOld: WebGLTexture;
    disabled: boolean;
    blurEnabled: boolean;
    computeOffset: Vec2;
    getTextureSize(): number;
    getSubdivisions(): number;
    compute(lightBlocking?: boolean): void;
    createDebugRenderer(): ITextureDebugRenderer;
    getRadiusModifier(tileX: number, tileY: number): number;
    canAnyPlayerSeeTile(tileX: number, tileY: number, tileZ: number): boolean;
    canPlayerSeeTile(player: IPlayer, tileX: number, tileY: number, tileZ: number): boolean;
    getPlayersThatSeeTile(tileX: number, tileY: number, tileZ: number): IPlayer[];
    getBounds(player: IPlayer): Bound3;
    compileShaders(gl: WebGLRenderingContext): void;
    tickSeed(): void;
}
export default IFieldOfView;
