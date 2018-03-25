import { PathType } from "resources/IResourceLoader";
declare module Style {
    function getImagePath(src: string): string;
    function getImagePath(pathType: PathType, path: number, ext?: string): string;
}
export default Style;
