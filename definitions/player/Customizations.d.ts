import { IColorDescription, IHairstyleDescription, IPlayerCustomization } from "player/IPlayer";
export declare const hairstyleDescriptions: Description<IHairstyleDescription>;
export declare const hairColorDescriptions: Description<IColorDescription>;
export declare const skinColorDescriptions: Description<IColorDescription>;
export declare function generateRandomCustomization(): IPlayerCustomization;
