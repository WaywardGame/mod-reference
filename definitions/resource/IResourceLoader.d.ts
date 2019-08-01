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
    Doodad = 2,
    Equip = 3,
    GameOptionsIcon = 4,
    Hairstyle = 5,
    HelpArticleIcon = 6,
    Item = 7,
    MenuBarButtonIcon = 8,
    Music = 9,
    Overlay = 10,
    Sleep = 11,
    SoundEffect = 12,
    StatIcon = 13,
    StatusEffect = 14,
    StatusEffectIcon = 15,
    Terrain = 16,
    TerrainDecoration = 17,
    TerrainMound = 18,
    TerrainTilled = 19,
    TileEvent = 20,
    Milestone = 21
}
export interface IResourceContainer {
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
}
