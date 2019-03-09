/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
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
import Vector3 from "utilities/math/Vector3";
export default class MapDialog extends Dialog implements IHookHost {
    private readonly canvas;
    private readonly textWrapper;
    private readonly direction;
    private mapCanvas;
    private map;
    private decodePosition;
    private decodeSkill;
    constructor(api: IGameScreenApi);
    getName(): Translation | UiTranslation.GameDialogMapName;
    decode(mapRequest: IMapRequest): void;
    onDigTreasure(human: Human, treasureTile: Vector3): void;
    private getDistance;
    private getDirection;
    private onResize;
}
