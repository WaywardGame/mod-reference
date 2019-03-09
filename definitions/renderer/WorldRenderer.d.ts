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
import { SpriteBatchLayer } from "Enums";
import IWorldRenderer from "renderer/IWorldRenderer";
import { ITileAdaptor } from "renderer/TileAdaptors";
import Fence from "renderer/tileAdaptors/Fence";
import Wall from "renderer/tileAdaptors/Wall";
import WorldLayerRenderer from "renderer/WorldLayerRenderer";
import Vector2 from "utilities/math/Vector2";
export default class WorldRenderer implements IWorldRenderer {
    private readonly gl;
    private static textureShaderProgram;
    private static worldShaderProgram;
    private static fogShaderProgram;
    positionTextureBuffer: WebGLBuffer;
    positionBuffer: WebGLBuffer;
    ditherTexture: WebGLTexture;
    layers: WorldLayerRenderer[];
    dirtAdaptor: ITileAdaptor;
    tillAdaptor: ITileAdaptor;
    waterAdaptor: ITileAdaptor;
    lavaAdaptor: ITileAdaptor;
    fenceAdaptor: Fence;
    mountainAdaptor: ITileAdaptor;
    wallAdaptor: Wall;
    defaultAdaptor: ITileAdaptor;
    floorAdaptor: ITileAdaptor;
    private readonly ambientIntensity;
    private readonly ambientColorDay;
    private readonly ambientColorDawn;
    private readonly ambientColorNight;
    private readonly ambientColorCave;
    private readonly screenspaceViewport;
    private readonly worldspaceViewport;
    private tileScale;
    private zoom;
    private readonly compositeFramebuffer;
    private readonly compositeTexture;
    private readonly layerFramebuffer;
    private readonly layerTexture;
    private readonly depthBuffer;
    private readonly fogFramebuffer;
    private readonly fogTexture;
    private readonly fogTextureStorage;
    private readonly vertexArraySingle;
    private readonly vertexArrayDouble;
    private itemBatch;
    private corpseBatch;
    private creatureBatch;
    private overTreesBatch;
    private creatureFlyingBatch;
    private overlayBatch;
    private readonly entitiesInViewport;
    private viewportSpritesDirty;
    static compileShaders(gl: WebGL2RenderingContext): void;
    constructor(gl: WebGL2RenderingContext);
    dispose(): void;
    initializeSpriteBatch(layer: SpriteBatchLayer, reset?: boolean): void;
    updateAll(): void;
    setSpriteTexture(texture: WebGLTexture, textureSizeInversed: Vector2): any;
    getPixelSize(): number;
    getZoom(): number;
    getTileScale(): number;
    setTileScale(tileScale: number): void;
    setZoom(zoom: number): void;
    setViewport(view: Vector2): void;
    getViewport(): Vector2;
    getTileViewport(): Vector2;
    getAmbientColor(): [number, number, number];
    getFogColor(): [number, number, number];
    renderWorld(x: number, y: number, z: number): void;
    render(): void;
    screenToTile(screenX: number, screenY: number): Vector2;
    getViewportBounds(): {
        min: Vector2;
        max: Vector2;
        z: number;
    };
    computeSpritesInViewport(): void;
    batchCreatures(): void;
    private isFlyingOffset;
    private batchShadow;
    private batchPlayers;
    private batchHuman;
    /**
     * Renders the status effects currently on the human.
     */
    private renderStatusEffects;
    /**
     * Renders a status effect image.
     */
    private renderStatusEffect;
    private spriteBatchForLayer;
    private shouldOffsetFlying;
    private computeSpritesInViewportInternal;
}
