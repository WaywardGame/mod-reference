import DoodadInfo from "doodad/DoodadInfo";
import { DoodadType } from "Enums";
import { IWorldLayer } from "renderer/IWorldLayer";
import IWorldRenderer from "renderer/IWorldRenderer";
export default class WorldLayerRenderer {
    private gl;
    protected renderer: IWorldRenderer;
    private worldLayer;
    width: number;
    height: number;
    texLightBlock: WebGLTexture;
    texLightLevel: WebGLTexture;
    texExplored: WebGLTexture;
    private dirty;
    private terrainLayer;
    private terrainOverLayer;
    private doodadLayer;
    private doodadOverLayer;
    constructor(gl: WebGL2RenderingContext, renderer: IWorldRenderer, worldLayer: IWorldLayer, width: number, height: number, positionBuffer: WebGLBuffer);
    updateAll(): void;
    setDoodad(x: number, y: number, doodad: DoodadType | undefined, doodadInfo: DoodadInfo | undefined, variation: number, hasGraphicVariation: boolean, flushImmediate?: boolean): void;
    renderFullbright(x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): void;
    private computeTile(x, y, flushImmediate?);
    private updateTileLightBlock(x, y, value);
    private flush();
}
