import { Source } from "utilities/Log";
export declare function debounce(id: string, callback: () => void, timeout: number): void;
export declare function findUnusedId<T>(source: Source, things: T[]): number;
export declare function parseCommandLineArgument(name: string, args: string): string | undefined;
