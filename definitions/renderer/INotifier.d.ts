/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
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
import { ItemType, StatType } from "Enums";
import Vec2 from "utilities/math/Vector2";
export interface INotifier {
    addItem(x: number, y: number, z: number, type: ItemType): void;
    addStat(x: number, y: number, z: number, type: StatType, value: number): void;
    clear(): void;
    update(): void;
    setTexture(texture: WebGLTexture, inverseTextureSize: Vec2): void;
    render(x: number, y: number, tileSize: number, tileScale: number, viewWidth: number, viewHeight: number): void;
}
export default INotifier;
