declare module Files {
    function download(name: string, data: any, stringify?: boolean, pretty?: boolean): void;
    function upload(e: Event): Promise<any>;
}
export default Files;
