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
