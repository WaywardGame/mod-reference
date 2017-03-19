import IByteGrid from "renderer/fieldofview/IByteGrid";
export interface IExploreMap extends IByteGrid {
    encode(): void;
    decode(): void;
    getSerializationProperties(version: string): string[];
}
export default IExploreMap;
