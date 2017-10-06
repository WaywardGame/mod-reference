import IByteGrid from "renderer/fieldofview/IByteGrid";
export interface IExploreMap extends IByteGrid {
    encode(): number[];
    decode(encodedData?: number[]): void;
    getSerializationProperties(version: string): string[];
}
export default IExploreMap;
