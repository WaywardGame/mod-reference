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
import IEntity from "entity/IEntity";
import { ItemType, StatType } from "Enums";
import Vec2 from "utilities/math/Vector2";
export interface INotifier {
    addItem(entity: IEntity, type: ItemType): void;
    addStat(entity: IEntity, type: StatType, value: number): void;
    clear(): void;
    update(timeStamp: number): void;
    setTexture(texture: WebGLTexture, inverseTextureSize: Vec2): void;
    render(x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): void;
}
export default INotifier;
