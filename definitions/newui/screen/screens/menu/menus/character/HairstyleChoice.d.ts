/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { HairStyle } from "Enums";
import ChoiceList, { Choice } from "newui/component/ChoiceList";
import { UiApi } from "newui/INewUi";
import { CharacterPreviewFilters, CharacterPreviewRotation } from "newui/screen/screens/menu/menus/character/CharacterPreview";
import { IPlayerCustomization } from "player/IPlayer";
export declare class HairstyleList extends ChoiceList {
    private readonly baseCustomization;
    private readonly filters?;
    constructor(api: UiApi, baseCustomization: IPlayerCustomization, filters?: CharacterPreviewFilters | undefined);
    select(selection: HairStyle, thro?: boolean): void;
    refreshChoices(): void;
    update(): void;
    rotate(direction: CharacterPreviewRotation): void;
}
export declare class HairstyleChoice extends Choice {
    private readonly _hairstyle;
    private readonly baseCustomization;
    private readonly preview;
    private customization;
    readonly hairstyle: HairStyle;
    constructor(api: UiApi, _hairstyle: HairStyle, baseCustomization: IPlayerCustomization, filters?: CharacterPreviewFilters);
    update(): void;
    rotate(direction: CharacterPreviewRotation): void;
}
