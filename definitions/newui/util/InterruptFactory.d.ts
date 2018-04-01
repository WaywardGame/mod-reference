import { InterruptChoice } from "language/ILanguage";
import { IInterruptFactory, InterruptInputOptions, MenuId, TextOrTranslationData, UiApi } from "newui/INewUi";
export default class InterruptFactory implements IInterruptFactory {
    private readonly uiApi;
    private readonly title;
    private readonly description;
    constructor(uiApi: UiApi, title: TextOrTranslationData, description?: TextOrTranslationData);
    withChoice(...choices: InterruptChoice[]): Promise<InterruptChoice>;
    withConfirmation(): Promise<boolean>;
    withInfo(): Promise<void>;
    withInput(options?: InterruptInputOptions): Promise<string>;
    withMenu(menuId: MenuId, args?: {
        [key: string]: any;
    }): Promise<void>;
    withLoading(canCancel?: boolean, specialType?: string): Promise<void>;
    private execute<R>(options);
}
