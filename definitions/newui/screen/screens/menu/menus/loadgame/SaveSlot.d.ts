import InputButton from "newui/component/InputButton";
import { UiApi } from "newui/INewUi";
export interface SaveSlotData {
    slot: number;
    score: number;
    won: boolean;
    modsUnloadable: {
        [index: string]: {
            name: string;
            unloadable: boolean;
        };
    };
    saveTime: number;
    createdTime: number;
    turns: number;
    seed: string;
    name: string;
}
export declare enum SaveSlotEvent {
    Rename = "Rename",
    Delete = "Delete",
}
export declare class SaveSlot extends InputButton {
    readonly slotData: DOMStringMap & SaveSlotData;
    constructor(api: UiApi, slot: number);
    /**
     * Loads the data for this save slot.
     */
    private load();
    /**
     * The tooltip generator for this component.
     */
    private getTooltip(tooltip);
    /**
     * Event handler for when this button is activated.
     */
    private onActivate();
    /**
     * Renames the save. Event handler for when this InputButton leaves edit mode.
     */
    private rename(_, newName);
    /**
     * Deletes the save. Event handler for the delete sub-button.
     */
    private delete();
    /**
     * Exports the save. Event handler for the export sub-button.
     */
    private export();
    /**
     * Exports this save to the Steam Workshop by making a temporary mod.
     */
    private exportToWorkshop();
    /**
     * Logs and interrupts when there's a mod publishing error.
     */
    private onPublishError(err);
    /**
     * Exports this save to a JSON file.
     */
    private exportToFile();
}
