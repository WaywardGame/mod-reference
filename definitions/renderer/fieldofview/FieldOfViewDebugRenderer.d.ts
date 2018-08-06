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
