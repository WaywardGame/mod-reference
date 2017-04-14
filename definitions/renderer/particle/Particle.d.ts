import { IRGB } from "Enums";
import { IParticle } from "renderer/particle/IParticle";
export default class Particle implements IParticle {
    private static shaderProgram;
    private count;
    private capacity;
    private positionSizeBuf;
    private colorBuf;
    private gl;
    private particles;
    private positionSizeData;
    private colorData;
    private particleSize;
    private lastUsedParticle;
    constructor(gl: WebGLRenderingContext, maxParticles?: number);
    create(tileX: number, tileY: number, tileZ: number, particle: IRGB): void;
    createMultiple(tileX: number, tileY: number, tileZ: number, particle: IRGB, count: number): void;
    clear(): void;
    simulate(dt: number): boolean;
    render(x: any, y: any): void;
    private findUnusedParticle();
    private spawn(tileX, tileY, r, g, b, count);
}
