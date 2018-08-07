/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
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
import * as TileAdaptor from "renderer/TileAdaptors";
import WorldLayerRenderer from "renderer/WorldLayerRenderer";
import { IBound3 } from "utilities/math/Bound3";
import Vec2 from "utilities/math/Vector2";
export interface IWorldRenderer {
    positionBuffer: WebGLBuffer;
    layers: WorldLayerRenderer[];
    dirtAdaptor: TileAdaptor.Dirt;
    tillAdaptor: TileAdaptor.Till;
    waterAdaptor: TileAdaptor.Water;
    lavaAdaptor: TileAdaptor.Lava;
    fenceAdaptor: TileAdaptor.Fence;
    mountainAdaptor: TileAdaptor.Mountain;
    wallAdaptor: TileAdaptor.Wall;
    defaultAdaptor: TileAdaptor.Default;
    floorAdaptor: TileAdaptor.Floor;
    updateAll(): void;
    setSpriteTexture(texture: WebGLTexture, textureSizeInversed: Vec2): any;
    getPixelSize(): number;
    getZoom(): number;
    getTileScale(): number;
    setTileScale(tileScale: number): void;
    setZoom(zoom: number): void;
    setViewport(view: Vec2): void;
    getViewport(): Vec2;
    getTileViewport(): Vec2;
    getAmbientColor(): [number, number, number];
    getFogColor(): [number, number, number];
    renderWorld(x: number, y: number, z: number): void;
    render(): void;
    screenToTile(screenX: number, screenY: number): Vec2;
    getViewportBounds(): IBound3;
    computeSpritesInViewport(): void;
    batchCreatures(): void;
}
export default IWorldRenderer;
