import IFlowFieldManager from "flowfield/IFlowFieldManager";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
export default class FlowFieldDebugRenderer implements ITextureDebugRenderer {
    private readonly ff;
    private readonly gl;
    private readonly viewQuadBuffer;
    private readonly shaderProgramAlphaDebug;
    private readonly tex;
    private readonly field;
    constructor(gl: WebGL2RenderingContext, ff: IFlowFieldManager);
    update(): void;
    renderDebug(): void;
}
