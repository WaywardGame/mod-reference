import IAudio from "audio/IAudio";
import { Music, SfxType } from "Enums";
import EnumCursor from "utilities/enum/EnumCursor";
export declare enum Fading {
    None = 0,
    In = 1,
    Out = 2,
}
export default class WAudio implements IAudio {
    private readonly _musicInfo;
    private readonly _sfxInfo;
    private readonly _soundQueue;
    private readonly _recentlyPlayedSounds;
    private readonly _fileFormat;
    private readonly _audioContext;
    private readonly _musicGainNode;
    private readonly _effectsGainNode;
    private _musicSpeed;
    private _soundDelay;
    private _musicHandler;
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
    updateVolume(): void;
    updatePosition(): void;
    queueEffect(type: SfxType, x: number, y: number, z: number, delay?: number, speed?: number, noPosition?: boolean): void;
    processEffects(): void;
    private _stopMusic();
    private _playMusic(music);
    private _playEffect(soundEffect, variation?);
    private _isComparableSound(soundEffect, x, y, z, type, delay, speed, now, noPosition);
    private _getAudioBuffer(resourcePath);
}
