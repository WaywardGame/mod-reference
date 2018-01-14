import { Music, SfxType } from "Enums";
export interface IAudio {
    fadeIn(): Promise<void>;
    fadeOut(): Promise<void>;
    playMusic(): void;
    playMusicTrack(musicTrack: Music): void;
    playNextMusicTrack(): void;
    processEffects(): void;
    queueEffect(soundEffect: SfxType, x: number, y: number, z: number, delay?: number, speed?: number, noPosition?: boolean): void;
    updateMusicSpeed(speed: number): void;
    updatePosition(): void;
    updateVolume(): void;
}
export default IAudio;
