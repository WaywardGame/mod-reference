import { IScreen } from "newui/screen/IScreen";
export declare enum Background {
    Default = 0,
    Win = 1,
    Death = 2,
}
export interface IMenuScreen extends IScreen {
    background: Background;
}
