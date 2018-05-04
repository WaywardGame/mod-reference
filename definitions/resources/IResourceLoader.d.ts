import { IImageOverrideDescription } from "mod/IModInfo";
import Vec2 from "utilities/math/Vector2";
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
    MenuBarButtonIcon = 7,
    Mound = 8,
    Music = 9,
    Sleep = 10,
    SoundEffect = 11,
    StatIcon = 12,
    StatusEffect = 13,
    StatusEffectIcon = 14,
    Terrain = 15,
    TileEvent = 16,
}
export interface IResourceContainer {
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
}
