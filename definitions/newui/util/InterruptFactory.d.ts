import { InterruptChoice } from "language/ILanguage";
import { TextOrTranslationData } from "newui/element/IComponent";
import { IInterruptFactory, UiApi } from "newui/INewUi";
import { MenuId } from "newui/screen/screens/menu/element/IMenu";
import { InterruptInputOptions } from "newui/util/IInterrupt";
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
