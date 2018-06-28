import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
import { IOptions } from "save/data/ISaveDataGlobal";
export default class UpdateOptionPacket extends PlayerTargetedSharedPacket {
    id: keyof IOptions;
    value: boolean | number;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
