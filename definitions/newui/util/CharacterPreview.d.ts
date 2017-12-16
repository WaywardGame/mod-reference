import { IRGB } from "Enums";
import { UiApi } from "newui/INewUi";
import UiElement from "newui/util/UiElement";
import { IPlayerCustomization } from "player/IPlayer";
export declare class SVG extends UiElement {
    private filters;
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
    private elementPreviewBody;
    private elementPreviewShirt;
    private elementPreviewPants;
    private elementPreviewHairShadow;
    private elementPreviewHair;
    private elementPreviewHairAccessory;
    private customization;
    private filters;
    private svg;
    private _loaded;
    readonly loaded: boolean;
    constructor(uiApi: UiApi, customization: IPlayerCustomization, filters?: CharacterPreviewFilters);
    getFilters(): CharacterPreviewFilters;
    update(): this;
    rotate(direction: CharacterPreviewRotation): void;
    private updateCharacterPreviewFilter(colorType, repaint?);
    private addPreviewLayer(layer);
}
