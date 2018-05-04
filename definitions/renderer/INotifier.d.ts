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
