import InputButton from "newui/element/InputButton";
import Menu from "newui/element/Menu";
import { UiApi } from "newui/INewUi";
export default class LoadGameMenu extends Menu {
    private readonly slots;
    private slotsWrapper;
    private sort;
    private sortDirection;
    private slotsRemainingHeading;
    private newGameButton;
    private importButton;
    constructor(uiApi: UiApi);
    private create();
    private updateNewGameButton();
    private addSlot(slot);
    private deleteSlot(slot);
    private refreshSlotText();
    private sortSlots(sort?, sortDirection?);
}
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
export declare class SaveSlot extends InputButton<SaveSlotData> {
    constructor(uiApi: UiApi, slot: number);
    private rename(newName);
    private load();
    private exportToWorkshop();
    private exportToFile();
}
