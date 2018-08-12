/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import IAudio from "audio/IAudio";
import { Music, SfxType } from "Enums";
import EnumCursor from "utilities/enum/EnumCursor";
export declare enum Fading {
    None = 0,
    In = 1,
    Out = 2
}
export default class WAudio implements IAudio {
    private readonly _musicInfo;
    private readonly _sfxInfo;
    private readonly _soundQueue;
    private readonly _recentlyPlayedSounds;
    private _fileFormat;
    private _onInitializedPromise;
    private _audioContext;
    private _musicGainNode;
    private _effectsGainNode;
    private _musicSpeed;
    private _soundDelay;
    private _musicHandler;
    constructor();
    /**
     * Returns the current music handler, an instance of `EnumCursor<Music>`
     */
    getMusicHandler(): EnumCursor<Music, string>;
    /**
     * Sets the music handler to the provided instance of `EnumCursor<Music>`. Causes any playing music to stop.
     */
    setMusicHandler(musicHandler: EnumCursor<Music>): Promise<void>;
    /**
     * Resets the music handler to its original state.
     */
    resetMusicHandler(): Promise<void>;
    /**
     * Sets the current track to the first in the current music handler.
     */
    playMusic(): Promise<void>;
    stopMusic(): void;
    updateMusicSpeed(speed: number): Promise<void>;
    updateVolume(): Promise<void>;
    updatePosition(): Promise<void>;
    queueEffect(type: SfxType, x: number, y: number, z: number, delay?: number, speed?: number, noPosition?: boolean): void;
    processEffects(): void;
    private _stopMusic;
    private _playMusic;
    private _playEffect;
    private _isComparableSound;
    private _getAudioBuffer;
    private initializeAudio;
    private waitForAudioContext;
}
