import { DoodadType } from "Enums";
import IWorldRenderer from "renderer/IWorldRenderer";
import WorldLayer from "renderer/WorldLayer";
export default class WorldLayerRenderer {
    private gl;
    protected renderer: IWorldRenderer;
    private worldLayer;
    private width;
    private height;
    texLightBlock: WebGLTexture;
    texLightLevel: WebGLTexture;
    texExplored: WebGLTexture;
    private dirty;
    private terrainLayer;
    private terrainOverLayer;
    private doodadLayer;
    private doodadOverLayer;
    constructor(gl: WebGLRenderingContext, renderer: IWorldRenderer, worldLayer: WorldLayer, width: number, height: number);
    updateAll(): void;
    setDoodad(x: number, y: number, doodad: DoodadType | undefined, variation: number, flushImmediate?: boolean): void;
    renderFullbright(x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): void;
    private computeTile(x, y, flushImmediate?);
    private updateTileLightBlock(x, y, value);
    private flush();
}
