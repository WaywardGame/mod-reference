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
import Entity from "entity/Entity";
import { ItemType } from "item/IItem";
import Vec2 from "utilities/math/Vector2";
export interface INotifier {
    addItem(entity: Entity, type: ItemType): void;
    addStat(entity: Entity, type: StatType, value: number): void;
    clear(): void;
    update(timeStamp: number): void;
    setTexture(texture: WebGLTexture, inverseTextureSize: Vec2): void;
    render(x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): void;
}
export default INotifier;
export declare enum StatType {
    EnemyHealth = 0,
    Stat = 1,
    Stamina = 2,
    Metabolism = 3,
    Health = 4,
    Thirst = 5,
    Zero = 6,
    Miss = 7,
    Immune = 8
}
