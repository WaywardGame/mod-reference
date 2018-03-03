import IAudio from "audio/IAudio";
import { Music, SfxType } from "Enums";
import EnumCursor from "utilities/enum/EnumCursor";
export declare enum Fading {
    None = 0,
    In = 1,
    Out = 2,
}
export default class WAudio implements IAudio {
    musicSpeed: number;
    fading: Fading;
    private readonly musicElements;
    private readonly sfx;
    private readonly soundQueue;
    private readonly recentlyPlayedSounds;
    private soundDelay;
    private musicHandler;
    private readonly fileFormat;
    private readonly audioContext;
    private readonly gainNode;
    constructor();
    /**
     * Returns the current music handler, an instance of `EnumCursor<Music>`
     */
    getMusicHandler(): EnumCursor<Music>;
    /**
     * Sets the music handler to the provided instance of `EnumCursor<Music>`. Causes any playing music to stop.
     */
    setMusicHandler(musicHandler: EnumCursor<Music>): void;
    /**
     * Resets the music handler to its original state.
     */
    resetMusicHandler(): void;
    /**
     * Sets the current track to the first in the current music handler.
     */
    playMusic(): void;
    updateMusicSpeed(speed: number): void;
    fadeOut(): Promise<void>;
    fadeIn(): Promise<void>;
    updateVolume(): void;
    updatePosition(): void;
    queueEffect(type: SfxType, x: number, y: number, z: number, delay?: number, speed?: number, noPosition?: boolean): void;
    processEffects(): void;
    private onChangeMusic(music);
    private playMusicTrack(track);
    private stopMusic();
    private isComparableSound(soundEffect, x, y, z, type, delay, speed, now, noPosition);
    private playEffect(soundEffect, variation?);
    private play(mediaElement);
}
