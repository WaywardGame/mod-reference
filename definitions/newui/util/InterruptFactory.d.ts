import { InterruptChoice } from "language/ILanguage";
import { TranslationGenerator } from "newui/component/IComponent";
import { IInput } from "newui/component/IInput";
import { IInterruptFactory, UiApi } from "newui/INewUi";
import { IMenu, MenuId } from "newui/screen/screens/menu/component/IMenu";
export default class InterruptFactory implements IInterruptFactory {
    private readonly api;
    private readonly title;
    private description;
    private canCancel;
    private executed;
    constructor(api: UiApi, title?: TranslationGenerator, description?: TranslationGenerator);
    setCanCancel(canCancel?: boolean): this;
    withDescription(description: TranslationGenerator): this;
    withChoice(...choices: InterruptChoice[]): Promise<InterruptChoice>;
    withConfirmation(): Promise<boolean>;
    withInfo(): Promise<void>;
    withInput(input?: (input: IInput) => any): Promise<string>;
    withMenu<M extends IMenu = IMenu>(menuId: MenuId, initializer?: (menu: M) => any): Promise<void>;
    withLoading(canCancel?: boolean, specialType?: string): Promise<void>;
    withLoading(until: Promise<any> | (() => Promise<any>), canCancel?: boolean, specialType?: string): Promise<void>;
    private execute;
    private warnIfNeverShown;
}
