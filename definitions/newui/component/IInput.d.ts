export interface IInput {
    setMaxLength(maxLength?: number): this;
    setCanBeEmpty(canBeEmpty?: boolean): this;
    setDefault(generator: () => string): this;
    setClearTo(clearTo?: () => string): this;
    setPlaceholder(generator: () => string): this;
    setShouldBlurWhenEnterPressedAndEmpty(shouldBlurWhenEnterPressedAndEmpty?: boolean): this;
}
