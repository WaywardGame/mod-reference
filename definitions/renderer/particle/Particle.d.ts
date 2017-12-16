import { IRGB } from "Enums";
import { IParticle } from "renderer/particle/IParticle";
export default class Particle implements IParticle {
    private gl;
    private static shaderProgram;
    private count;
    private capacity;
    private positionSizeBuf;
    private colorBuf;
    private particles;
    private positionSizeData;
    private colorData;
    private particleSize;
    private lastUsedParticle;
    private vertexArray;
    constructor(gl: WebGL2RenderingContext, maxParticles?: number);
    create(tileX: number, tileY: number, tileZ: number, particle: IRGB): void;
    createMultiple(tileX: number, tileY: number, tileZ: number, particle: IRGB, count: number, intensity?: number, ignoreFieldOfView?: boolean): void;
    clear(): void;
    simulate(): void;
    render(x: any, y: any): void;
    private findUnusedParticle();
    private spawn(tileX, tileY, r, g, b, intensity, count);
}
