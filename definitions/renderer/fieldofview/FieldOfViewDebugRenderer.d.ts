import IFieldOfView from "renderer/fieldofview/IFieldOfView";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
export default class FieldOfViewDebugRenderer implements ITextureDebugRenderer {
    private fov;
    private gl;
    private viewQuadBuffer;
    private viewQuadBuffer2;
    private shaderProgramAlphaDebug;
    constructor(gl: WebGL2RenderingContext, fov: IFieldOfView);
    renderDebug(): void;
}
