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
import UiTranslation from "language/dictionary/UiTranslation";
import Dialog from "newui/screen/screens/game/component/Dialog";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
import IPlayer from "player/IPlayer";
export declare enum NotesDialogEvent {
    /**
     * @param noteId The note that was shown
     */
    ShowNote = 0
}
export default class NotesDialog extends Dialog {
    private readonly noteId;
    private readonly noteLinks;
    private readonly learnMoreLink;
    private note;
    private current;
    constructor(api: IGameScreenApi);
    onWrittenNote(player: IPlayer, id: number): void;
    getName(): UiTranslation;
    showNote(noteId: number): this;
    private previousNote;
    private nextNote;
    private onShow;
    private onNoteNumberActivate;
    private refreshNotesPanel;
    private learnMore;
}
