import { IRGB } from "Enums";
import { UiApi } from "newui/INewUi";
import UiElement from "newui/util/UiElement";
import { IPlayerCustomization } from "player/IPlayer";
export declare class SVG extends UiElement {
    private readonly filters;
    constructor(uiApi: UiApi);
    createFilter(id: string): this;
    setFilterColor(id: string, color: IRGB): void;
}
export interface CharacterPreviewFilters {
    skin: string;
    hair: string;
}
export declare type CharacterPreviewRotation = 0 | 1 | 2 | 3;
export default class CharacterPreview extends UiElement {
    private readonly elementPreviewBody;
    private readonly elementPreviewShirt;
    private readonly elementPreviewPants;
    private readonly elementPreviewHairShadow;
    private readonly elementPreviewHair;
    private readonly elementPreviewHairAccessory;
    private readonly customization;
    private readonly filters;
    private readonly svg;
    private _loaded;
    readonly loaded: boolean;
    constructor(uiApi: UiApi, customization: IPlayerCustomization, filters?: CharacterPreviewFilters);
    getFilters(): CharacterPreviewFilters;
    update(): this;
    rotate(direction: CharacterPreviewRotation): void;
    private updateCharacterPreviewFilter(colorType, repaint?);
    private addPreviewLayer(layer);
}
