declare module Files {
    function get(path: string): Promise<Response>;
    function getText(path: string): Promise<string>;
    function getJson<T>(path: string): Promise<T>;
    function getArrayBuffer(path: string): Promise<ArrayBuffer>;
    function download(name: string, data: any, stringify?: boolean, pretty?: boolean): void;
    function upload(e: Event): Promise<any>;
}
export default Files;
