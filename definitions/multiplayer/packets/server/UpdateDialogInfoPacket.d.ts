/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
import { IDialogInfo } from "ui/IUi";
export default class UpdateDialogInfoPacket extends PlayerTargetedServerPacket {
    index: string | number;
    info: IDialogInfo;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
