import { IRGB } from "Enums";
import { IParticle } from "renderer/particle/IParticle";
export default class Particle implements IParticle {
    private readonly gl;
    private static shaderProgram;
    private count;
    private readonly capacity;
    private readonly positionSizeBuf;
    private readonly colorBuf;
    private readonly particles;
    private readonly positionSizeData;
    private readonly colorData;
    private readonly particleSize;
    private lastUsedParticle;
    private readonly vertexArray;
    constructor(gl: WebGL2RenderingContext, maxParticles?: number);
    create(tileX: number, tileY: number, tileZ: number, particle: IRGB): void;
    createMultiple(tileX: number, tileY: number, tileZ: number, particle: IRGB, count: number, intensity?: number, ignoreFieldOfView?: boolean): void;
    clear(): void;
    simulate(): void;
    render(x: any, y: any): void;
    private findUnusedParticle;
    private spawn;
}
