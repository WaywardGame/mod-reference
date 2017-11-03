import { IActionArgument } from "action/IAction";
import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
export default class ActionPacket extends PlayerTargetedSharedPacket {
    action: IActionArgument;
    getDebugInfo(): string;
    process(): void;
    protected writeData(): void;
    protected readData(): void;
}
