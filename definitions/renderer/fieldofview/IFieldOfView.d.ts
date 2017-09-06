import Vec2 = TSM.vec2;
import { IPlayer } from "player/IPlayer";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import * as Utilities from "Utilities";
export interface IFieldOfView {
    blurEnabled: boolean;
    computeOffset: Vec2;
    disabled: boolean;
    readonly maxRadius: number;
    readonly radius: number;
    texLight: WebGLTexture;
    texLightOld: WebGLTexture;
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, lightLevel?: number): boolean;
    compute(force?: boolean): boolean;
    createDebugRenderer(): ITextureDebugRenderer;
    getBounds(player: IPlayer, radius?: number): Utilities.Bound3;
    getSubdivisions(): number;
    getTextureSize(): number;
    updateRadius(radius: number, maxRadius: number): void;
    tickSeed(): void;
}
export default IFieldOfView;
