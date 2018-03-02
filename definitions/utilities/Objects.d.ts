declare module Objects {
    function windowKeysToObject(keys: string[]): any;
    function windowKeysToParentObject(keys: string[]): any;
    function objectDeepClone<T>(obj: T): T;
}
export default Objects;
