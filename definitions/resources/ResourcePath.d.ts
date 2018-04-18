import { PathType } from "resources/IResourceLoader";
export interface IResourceData {
    enumObject: any;
    descriptions?: {
        [key: number]: any;
    };
}
declare module ResourcePath {
    /**
     * Returns the path of a resource.
     * @param pathType The type of resource this is.
     * @param index The index of this resource (indexed by this number in resource's enum)
     * @param extra Anything extra to append to the path.
     */
    function getPath(pathType: PathType, index: number): string;
    /**
     * Returns the mod version of a given resource path.
     * @param path The current path of this resource.
     * @param descriptions The descriptions of this path type.
     * @param index The index of this resource.
     *
     * Steps taken:
     * 1. If the path is not a mod-added resource, it will return the given path. Otherwise:
     * 2. If the description has a custom path stored in `imagePath`, the given path is replaced with this path.
     * 3. Return `{modManager.getPath(modIndex)}/{path}`
     */
    function getModPath(path: string, descriptions: IResourceData["descriptions"], index: number): string;
    /**
     * Returns a resource's name.
     *
     * Warning: Does not validate that `index` is in `enumObject`.
     */
    function getResourceName(enumObject: any, index: number): string;
    /**
     * Returns the resource type of the given `PathType`.
     */
    function getPathResourceType(pathType: PathType): "sound" | "image";
    /**
     * Returns the domain for the given `PathType`, or `undefined` if the `PathType` has no domain.
     */
    function getPathDomain(pathType: PathType): "character" | "ui/icons" | undefined;
    /**
     * Returns the name of the given `PathType`
     */
    function getPathTypeName(pathType: PathType): string;
}
export default ResourcePath;
