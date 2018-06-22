import IBaseEntity from "entity/IBaseEntity";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { IModdable } from "Enums";
import StatusEffectRenderer from "renderer/StatusEffectRenderer";
export interface IStatusEffectDescription extends IModdable {
    iconPath?: string | ((entity: IBaseEntity) => string);
    renderer: StatusEffectRenderer;
    /**
     * Whether the status effect should pass (be removed from the human).
     */
    shouldPass(human: IBaseHumanEntity): boolean;
    /**
     * Event handler for when the status effect passes.
     */
    onPassed(human: IBaseHumanEntity): void;
    /**
     * Event handler for every tick that the human has the status effect.
     */
    onTick(human: IBaseHumanEntity): void;
}
declare const statusEffectDescriptions: Description<IStatusEffectDescription>;
export default statusEffectDescriptions;
