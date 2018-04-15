import { PathType } from "resources/IResourceLoader";
declare module Style {
    function getImagePath(src: string, path?: undefined, ext?: string, isVariable?: boolean): string;
    function getImagePath(pathType: PathType, path: number, ext?: string, isVariable?: boolean): string;
}
export default Style;
