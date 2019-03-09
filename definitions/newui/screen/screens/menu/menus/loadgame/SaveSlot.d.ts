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
import { Difficulty } from "game/Difficulty";
import InputButton from "newui/component/InputButton";
import { UiApi } from "newui/INewUi";
export interface SaveSlotData {
    slot: number;
    score: number;
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
    difficulty: Difficulty;
}
export declare enum SaveSlotEvent {
    Rename = "Rename",
    Delete = "Delete"
}
export declare class SaveSlot extends InputButton {
    private deathby;
    readonly slotData: DOMStringMap & SaveSlotData;
    constructor(api: UiApi, slot: number);
    /**
     * Loads the data for this save slot.
     */
    private load;
    /**
     * The tooltip generator for this component.
     */
    private getTooltip;
    /**
     * Renames the save. Event handler for when this InputButton leaves edit mode.
     */
    private rename;
    /**
     * Deletes the save. Event handler for the delete sub-button.
     */
    private delete;
    /**
     * Exports the save. Event handler for the export sub-button.
     */
    private export;
    /**
     * Exports this save to the Steam Workshop by making a temporary mod.
     */
    private exportToWorkshop;
    /**
     * Logs and interrupts when there's a mod publishing error.
     */
    private onPublishError;
    /**
     * Exports this save to a JSON file.
     */
    private exportToFile;
    static getFileName(name?: string): string;
}
