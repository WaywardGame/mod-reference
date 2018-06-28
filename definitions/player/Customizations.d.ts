import { ICharacter, IColorDescription, IHairstyleDescription, IPlayerCustomization } from "player/IPlayer";
export declare const hairstyleDescriptions: Description<IHairstyleDescription>;
export declare const hairColorDescriptions: Description<IColorDescription>;
export declare const skinColorDescriptions: Description<IColorDescription>;
export declare function generateRandomCustomization(): IPlayerCustomization;
export declare function generateRandomCharacter(): ICharacter;
export declare enum ColorType {
    Hair = "hairColor",
    Skin = "skinColor"
}
export declare function getColorDescription(type: ColorType, color: string): IColorDescription;
