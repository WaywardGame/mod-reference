import Vec2 = TSM.vec2;
import { IPlayer } from "player/IPlayer";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { Bound3 } from "Utilities";
export interface IFieldOfView {
    blurEnabled: boolean;
    computeOffset: Vec2;
    disabled: boolean;
    maxRadius: number;
    radius: number;
    texLight: WebGLTexture;
    texLightOld: WebGLTexture;
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, lightLevel?: number): boolean;
    compute(lightBlocking?: boolean): void;
    createDebugRenderer(): ITextureDebugRenderer;
    getBounds(player: IPlayer, radius?: number): Bound3;
    getSubdivisions(): number;
    getTextureSize(): number;
    tickSeed(): void;
}
export default IFieldOfView;
