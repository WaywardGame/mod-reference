import Vec2 = TSM.vec2;
import { IImageOverrideDescription } from "mod/IModManager";
export interface IResourceLoader {
    initialize(gl: WebGLRenderingContext): void;
    loadResources(container: IResourceContainer): void;
    getPath(pathType: PathType, index: number): string;
    takeLoadingSlot(callback: () => void): void;
    getImageOverride(src: string): Partial<IImageOverrideDescription>;
    releaseLoadingSlot(): void;
}
export default IResourceLoader;
export declare enum PathType {
    Creature = 0,
    Corpse = 1,
    Item = 2,
    Equip = 3,
    Terrain = 4,
    Doodad = 5,
    Hairstyle = 6,
}
export interface IResourceContainer {
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
}
