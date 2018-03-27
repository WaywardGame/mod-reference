export interface ISplit {
    split: string;
    color?: string;
}
export default function interpolate(str: string, ...args: any[]): ISplit[];
