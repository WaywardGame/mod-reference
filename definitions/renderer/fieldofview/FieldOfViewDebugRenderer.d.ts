import IFieldOfView from "renderer/fieldofview/IFieldOfView";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
export default class FieldOfViewDebugRenderer implements ITextureDebugRenderer {
    private readonly fov;
    private readonly gl;
    private readonly viewQuadBuffer;
    private readonly viewQuadBuffer2;
    private readonly shaderProgramAlphaDebug;
    constructor(gl: WebGL2RenderingContext, fov: IFieldOfView);
    renderDebug(): void;
}
