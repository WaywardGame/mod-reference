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
import { IRGB } from "Enums";
import Component from "newui/component/Component";
import { UiApi } from "newui/INewUi";
import { IPlayerCustomization } from "player/IPlayer";
export declare class SVG extends Component {
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
export default class CharacterPreview extends Component {
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
    constructor(api: UiApi, customization: IPlayerCustomization, filters?: CharacterPreviewFilters);
    getFilters(): CharacterPreviewFilters;
    update(): this;
    rotate(direction: CharacterPreviewRotation): void;
    private updateCharacterPreviewFilter;
    private addPreviewLayer;
}
