import IAudio from "audio/IAudio";
import { Music, SfxType } from "Enums";
export declare enum Fading {
    None = 0,
    In = 1,
    Out = 2,
}
export default class WAudio implements IAudio {
    musicSpeed: number;
    fading: Fading;
    private music;
    private sfx;
    private soundQueue;
    private recentlyPlayedSounds;
    private soundDelay;
    private musicTrack;
    private fileFormat;
    private audioContext;
    private gainNode;
    constructor();
    setupMusic(track: HTMLAudioElement): void;
    playMusic(): void;
    updateMusicSpeed(speed: number): void;
    fadeOut(): Promise<void>;
    fadeIn(): Promise<void>;
    playNextMusicTrack(): void;
    playMusicTrack(musicTrack: Music): void;
    updateVolume(): void;
    updatePosition(): void;
    queueEffect(type: SfxType, x: number, y: number, z: number, delay?: number, speed?: number, noPosition?: boolean): void;
    processEffects(): void;
    private isComparableSound(soundEffect, x, y, z, type, delay, speed, now, noPosition);
    private playEffect(soundEffect, variation?);
    private play(mediaElement);
}
