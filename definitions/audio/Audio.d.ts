import { SfxType } from "Enums";
import IAudio from "IAudio";
export default class WAudio implements IAudio {
    musicSpeed: number;
    fadingOut: boolean;
    fadingIn: boolean;
    private music;
    private sfx;
    private soundQueue;
    private soundDelay;
    private musicPlaylist;
    private musicTrack;
    private fileFormat;
    private audioContext;
    private gainNode;
    constructor();
    setUpMusic(track: HTMLAudioElement): void;
    playMusic(): void;
    updateMusicSpeed(speed: number): void;
    fadeOut(): void;
    fadeIn(): void;
    nextTrack(): void;
    updateVolume(): void;
    updatePosition(): void;
    queueEffect(type: SfxType, x: number, y: number, z: number, delay?: number, speed?: number, noPosition?: boolean): void;
    processEffects(): void;
    private playEffect(soundEffect, soundChance?);
    private play(mediaElement);
}
