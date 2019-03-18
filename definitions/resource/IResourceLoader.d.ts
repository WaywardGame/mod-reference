/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IImageOverrideDescription } from "mod/IModInfo";
import Vec2 from "utilities/math/Vector2";
import ResolvablePromise from "utilities/promise/ResolvablePromise";
export interface IResourceLoader {
    initialize(gl: WebGL2RenderingContext): void;
    loadResources(container: IResourceContainer): ResolvablePromise;
    takeLoadingSlot(callback: () => void): void;
    getImageOverride(src: string): Partial<IImageOverrideDescription> | undefined;
    updateImageOverrides(): void;
    releaseLoadingSlot(): void;
}
export default IResourceLoader;
export declare enum PathType {
    Corpse = 0,
    Creature = 1,
    DifficultyOptionsIcon = 2,
    Doodad = 3,
    DoodadItem = 4,
    Equip = 5,
    Hairstyle = 6,
    HelpArticleIcon = 7,
    Item = 8,
    MenuBarButtonIcon = 9,
    Music = 10,
    Overlay = 11,
    Sleep = 12,
    SoundEffect = 13,
    StatIcon = 14,
    StatusEffect = 15,
    StatusEffectIcon = 16,
    Terrain = 17,
    TerrainDecoration = 18,
    TerrainMound = 19,
    TerrainTilled = 20,
    TileEvent = 21
}
export interface IResourceContainer {
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
}
