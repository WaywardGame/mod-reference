export interface IModConfig {
    readonly name: string;
    readonly description: string;
    readonly version: string;
    readonly author: string;
    readonly file: string;
    readonly unloadable?: boolean;
    readonly dependencies?: string[];
    readonly compatibleMinorVersions: number[];
    readonly multiplayerCompatible?: boolean;
    readonly multiplayerClientside?: boolean;
    readonly languages?: string[];
    readonly stylesheets?: string[];
    readonly imageOverrides?: boolean;
    readonly customizations?: boolean;
    readonly publishedFileId?: string;
}
