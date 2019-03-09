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
import { TranslationGenerator } from "newui/component/IComponent";
export interface IInput {
    setMaxLength(maxLength?: number): this;
    setCanBeEmpty(canBeEmpty?: boolean): this;
    setDefault(generator: () => string): this;
    setClearTo(clearTo?: () => string): this;
    setPlaceholder(generator: TranslationGenerator): this;
    setShouldBlurWhenEnterPressedAndEmpty(shouldBlurWhenEnterPressedAndEmpty?: boolean): this;
}
