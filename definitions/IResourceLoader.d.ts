import Vec2 = TSM.vec2;
import { IImageOverrideDescription } from "mod/IModManager";
export interface IResourceLoader {
    initialize(gl: WebGL2RenderingContext): void;
    loadResources(container: IResourceContainer, callback: () => void): void;
    getPath(pathType: PathType, index: number, extra?: number): string;
    takeLoadingSlot(callback: () => void): void;
    getImageOverride(src: string): Partial<IImageOverrideDescription>;
    updateImageOverrides(): void;
    releaseLoadingSlot(): void;
}
export default IResourceLoader;
export declare enum PathType {
    Corpse = 0,
    Creature = 1,
    Doodad = 2,
    Equip = 3,
    Hairstyle = 4,
    Item = 5,
    Mound = 6,
    Music = 7,
    Sleep = 8,
    SoundEffect = 9,
    Terrain = 10,
    TileEvent = 11,
}
export interface IResourceContainer {
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
}
