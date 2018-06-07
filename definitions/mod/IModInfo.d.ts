import { ILanguage } from "language/ILanguage";
import { IModConfig } from "mod/IMod";
import Mod from "mod/Mod";
import Log from "utilities/Log";
export interface IModInfo {
    config: IModConfig;
    state: ModState;
    path: string;
    folderName: string;
    type: ModType;
    provides: IModProvides;
    instance?: Mod;
    initialized?: boolean;
    publishedFileId?: string;
    steamIDOwner?: string;
    lastUpdated?: number;
    installDate?: number;
    createdDate?: number;
    imageOverrides?: IImageOverrides;
    customizations?: ICustomizations;
    stylesheets?: string[];
    languages?: Array<{
        path: string;
        instance?: ILanguage;
    }>;
    log: Log;
}
export declare enum TypeFlag {
    Undefined = 1,
    Null = 2,
    Number = 4,
    Boolean = 8,
    String = 16,
    Object = 32,
    Array = 64,
    Function = 128
}
export declare enum ModState {
    Disabled = 0,
    Enabled = 1,
    Loaded = 2,
    Error = 3,
    ChangingState = 4,
    Temporary = 5
}
export declare enum ModType {
    Internal = 0,
    Local = 1,
    Workshop = 2
}
export interface IModProvides {
    scripts: boolean;
    languages: number;
    stylesheets: number;
    imageOverrides: boolean;
    customizations: boolean;
}
export interface IImageOverrideDescription {
    replace: string;
    imagePath?: string;
    animated?: boolean;
}
export declare type IImageOverrides = Array<string | IImageOverrideDescription>;
export interface ICustomizations {
    hairColors: string[];
    skinColors: string[];
    hairStyles: Array<string | {
        name: string;
        path: string;
    }>;
}
