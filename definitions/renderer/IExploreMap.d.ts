import IByteGrid from "renderer/fieldofview/IByteGrid";
export interface IExploreMap extends IByteGrid {
    encode(): number[];
    decode(encodedData?: number[]): void;
}
export default IExploreMap;
