export interface IVersionInfo {
    str: string;
    stage: "beta" | "release";
    major: number;
    minor: number;
    patch: number;
    name?: string;
    date?: Date;
}
declare module Version {
    function getVersionInfo(version: string): IVersionInfo;
    function isSameVersion(version: IVersionInfo, compareVersion: IVersionInfo): boolean;
    function getVersionDisplayString(version?: string | IVersionInfo): string;
}
export default Version;
