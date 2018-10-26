/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IMapRequest } from "game/IGame";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import { IHookHost } from "mod/IHookHost";
import Dialog from "newui/screen/screens/game/component/Dialog";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
import IPlayer from "player/IPlayer";
import Vector3 from "utilities/math/Vector3";
export default class MapDialog extends Dialog implements IHookHost {
    private readonly canvas;
    private item;
    private mapCanvas;
    constructor(api: IGameScreenApi);
    getName(): UiTranslation.GameDialogMapName | Translation;
    setMap(mapRequest: IMapRequest): void;
    onDigTreasure(player: IPlayer, treasureTile: Vector3): void;
    private onResize;
}
