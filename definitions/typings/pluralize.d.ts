declare module pluralize {
    export function plural(str: string, count?: number): string;
    export function addPluralRule(from: string, to: string): void;
}
