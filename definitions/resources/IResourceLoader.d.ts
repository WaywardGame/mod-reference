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
    HelpArticleIcon = 6,
    Item = 7,
    MenuBarButtonIcon = 8,
    Mound = 9,
    Music = 10,
    Overlay = 11,
    Sleep = 12,
    SoundEffect = 13,
    StatIcon = 14,
    StatusEffect = 15,
    StatusEffectIcon = 16,
    Terrain = 17,
    TileEvent = 18
}
export interface IResourceContainer {
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
}
