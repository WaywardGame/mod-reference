import ChoiceList, { Choice } from "newui/component/ChoiceList";
import { UiApi } from "newui/INewUi";
import { IColorDescription } from "player/IPlayer";
export declare class SwatchList<T extends number> extends ChoiceList {
    private readonly colors;
    constructor(api: UiApi, colors: Description<IColorDescription>);
    select(selection: T, thro?: boolean): void;
    refreshChoices(): void;
}
export declare class Swatch extends Choice {
    color: IColorDescription;
    constructor(api: UiApi, color: IColorDescription);
}
