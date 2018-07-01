import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
import { IVector2 } from "utilities/math/IVector";
export default class UpdateWalkPathPacket extends PlayerTargetedSharedPacket {
    path: IVector2[] | undefined;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
