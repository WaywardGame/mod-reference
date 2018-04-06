import { IUiScreen } from "newui/screen/IUiScreen";
export declare enum Background {
    Default = 0,
    Win = 1,
    Death = 2,
}
export interface IMenuScreen extends IUiScreen {
    background: Background;
}
