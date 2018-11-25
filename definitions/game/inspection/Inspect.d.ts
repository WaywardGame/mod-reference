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
import IEntity from "entity/IEntity";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { ITile } from "tile/ITerrain";
import Vector3 from "utilities/math/Vector3";
import { IInspectionSectionSimple, InspectionContext } from "./IInspection";
declare class Inspection {
    readonly inspector: Human;
    readonly context: InspectionContext | string;
    readonly tile: ITile;
    readonly tilePosition: Vector3;
    static inspect(inspector: Human, tilePosition: Vector3, context: InspectionContext | string): IterableIterator<IInspectionSectionSimple>;
    private constructor();
    inspectEntityHealth(entity: IEntity, entityName?: Translation, revealer?: Translation, skillPercent?: number, healthPercent?: number): Translation | undefined;
    inspectFire(decay?: number, isOpenFire?: boolean): Translation | undefined;
}
declare module Inspection {
    function ofFire(decay?: number, isOpenFire?: boolean): Message;
}
export default Inspection;
