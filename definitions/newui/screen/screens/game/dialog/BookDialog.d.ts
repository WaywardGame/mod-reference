/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { BookType } from "Enums";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import Dialog from "newui/screen/screens/game/component/Dialog";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
export default class BookDialog extends Dialog {
    private book?;
    private readonly text;
    constructor(api: IGameScreenApi);
    getName(): Translation | UiTranslation.GameDialogBookName;
    setBook(book: BookType): void;
    private getText;
}
