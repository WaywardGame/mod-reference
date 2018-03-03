import { Music, SfxType } from "Enums";
import EnumCursor from "utilities/enum/EnumCursor";
export interface IAudio {
    fadeIn(): Promise<void>;
    fadeOut(): Promise<void>;
    resetMusicHandler(): void;
    getMusicHandler(): EnumCursor<Music>;
    setMusicHandler(handler: EnumCursor<Music>): void;
    playMusic(): void;
    processEffects(): void;
    queueEffect(soundEffect: SfxType, x: number, y: number, z: number, delay?: number, speed?: number, noPosition?: boolean): void;
    updateMusicSpeed(speed: number): void;
    updatePosition(): void;
    updateVolume(): void;
}
export default IAudio;
