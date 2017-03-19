import { SfxType } from "Enums";
export interface IAudio {
    musicSpeed: number;
    fadingOut: boolean;
    fadingIn: boolean;
    playMusic(): void;
    updateMusicSpeed(speed: number): void;
    fadeOut(): void;
    fadeIn(): void;
    nextTrack(): void;
    updateVolume(): void;
    updatePosition(): void;
    queueEffect(soundEffect: SfxType, x: number, y: number, z: number, delay?: number, speed?: number, noPosition?: boolean): void;
    processEffects(): void;
}
export default IAudio;
