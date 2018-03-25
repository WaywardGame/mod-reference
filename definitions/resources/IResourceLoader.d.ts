import Vec2 = TSM.vec2;
import { IImageOverrideDescription } from "mod/IModInfo";
export interface IResourceLoader {
    initialize(gl: WebGL2RenderingContext): void;
    loadResources(container: IResourceContainer, callback: () => void): void;
    takeLoadingSlot(callback: () => void): void;
    getImageOverride(src: string): Partial<IImageOverrideDescription> | undefined;
    updateImageOverrides(): void;
    releaseLoadingSlot(): void;
}
export default IResourceLoader;
export declare enum PathType {
    Corpse = 0,
    Creature = 1,
    Doodad = 2,
    DoodadItem = 3,
    Equip = 4,
    Hairstyle = 5,
    Item = 6,
    Mound = 7,
    Music = 8,
    Sleep = 9,
    SoundEffect = 10,
    Terrain = 11,
    TileEvent = 12,
    StatIcon = 13,
    StatusEffectIcon = 14,
}
export interface IResourceContainer {
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
}
