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
import Player from "entity/player/Player";
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import UiTranslation from "language/dictionary/UiTranslation";
import Dialog from "newui/screen/screens/game/component/Dialog";
interface INotesDialogEvents extends Events<Dialog> {
    /**
     * @param noteId The note that was shown
     */
    showNote(noteId: number): any;
}
export default class NotesDialog extends Dialog {
    event: IEventEmitter<this, INotesDialogEvents>;
    private readonly noteId;
    private readonly noteLinks;
    private readonly learnMoreLink;
    private note;
    private current;
    constructor();
    onWrittenNote(player: Player, id: number): void;
    getName(): UiTranslation;
    showNote(noteId: number): this;
    protected onShow(): void;
    private previousNote;
    private nextNote;
    private onNoteNumberActivate;
    private refreshNotesPanel;
    private learnMore;
}
export {};
