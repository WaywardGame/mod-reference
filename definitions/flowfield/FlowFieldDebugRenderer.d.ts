import IFlowFieldManager from "IFlowFieldManager";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
export default class FlowFieldDebugRenderer implements ITextureDebugRenderer {
    private ff;
    private gl;
    private viewQuadBuffer;
    private shaderProgramAlphaDebug;
    private tex;
    private field;
    constructor(gl: WebGL2RenderingContext, ff: IFlowFieldManager);
    update(): void;
    renderDebug(): void;
}
