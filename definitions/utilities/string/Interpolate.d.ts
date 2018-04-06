export interface ISplit {
    split: string;
    color?: string;
}
declare function interpolate(str: string, ...args: any[]): string;
declare module interpolate {
    const withColors: (str: string, ...args: any[]) => ISplit[];
}
export default interpolate;
