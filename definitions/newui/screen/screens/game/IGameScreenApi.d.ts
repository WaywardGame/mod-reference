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
import UiTranslation from "language/dictionary/UiTranslation";
import Translation, { ISerializedTranslation } from "language/Translation";
import Component from "newui/component/Component";
import { DialogId } from "newui/screen/screens/game/Dialogs";
import { IStringSection } from "utilities/string/Interpolator";
export declare enum QuadrantComponentId {
    Messages = 0,
    Stats = 1,
    Quickslots = 2,
    MenuBar = 3
}
export declare enum PinType {
    Note = 0,
    QuestRequirement = 1,
    Misc = 2
}
export declare enum MessageTimestamp {
    None = 0,
    RealTime = 1,
    Turn = 2
}
export interface IPinnedMessage extends Component {
    type: PinType;
    id: any;
}
export interface IDialog extends Component {
    id: DialogId;
    getName(): Iterable<IStringSection> | Translation | UiTranslation | ISerializedTranslation | undefined;
    showPanel(id: string | number): Component | undefined;
    showSettingsPanel(): this;
}
