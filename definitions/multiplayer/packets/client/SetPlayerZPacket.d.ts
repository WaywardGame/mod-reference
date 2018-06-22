import PlayerTargetedClientPacket from "multiplayer/packets/PlayerTargetedClientPacket";
export default class SetPlayerZPacket extends PlayerTargetedClientPacket {
    z: number;
    process(): void;
}
