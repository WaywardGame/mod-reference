import { IRGB } from "Enums";
export interface IParticle {
    clear(): void;
    create(tileX: number, tileY: number, tileZ: number, particle: IRGB): void;
    createMultiple(tileX: number, tileY: number, tileZ: number, particle: IRGB, count: number): void;
    simulate(dt: number): boolean;
    render(x: any, y: any): void;
}
export declare enum ParticleType {
    Fire = 0,
    Water = 1,
    Blood = 2,
}
