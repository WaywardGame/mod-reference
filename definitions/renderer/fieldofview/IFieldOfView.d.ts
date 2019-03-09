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
import { IPlayer } from "player/IPlayer";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { IBound3 } from "utilities/math/Bound3";
import Vec2 from "utilities/math/Vector2";
export interface IFieldOfView {
    blurEnabled: boolean;
    computeOffset: Vec2;
    disabled: boolean;
    readonly maxRadius: number;
    readonly radius: number;
    readonly transitionProgress: number;
    texLight: WebGLTexture;
    texLightOld: WebGLTexture;
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, lightLevel?: number): boolean;
    compute(force?: boolean, ambientLightLevel?: number): void;
    createDebugRenderer(): ITextureDebugRenderer;
    getBounds(player: IPlayer, radius?: number): IBound3;
    getSubdivisions(): number;
    getTextureSize(): number;
    resetGl(gl: WebGL2RenderingContext): void;
    tickSeed(): void;
    updateRadius(radius: number, maxRadius: number): void;
    updateTransitionProgress(): boolean;
    resetTransitionProgress(): void;
}
export default IFieldOfView;
