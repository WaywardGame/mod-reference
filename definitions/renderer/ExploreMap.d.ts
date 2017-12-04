import ByteGrid from "renderer/fieldofview/ByteGrid";
import IExploreMap from "renderer/IExploreMap";
export default class ExploreMap extends ByteGrid implements IExploreMap {
    private encodedData;
    encode(): number[];
    decode(encodedData?: number[]): void;
}
