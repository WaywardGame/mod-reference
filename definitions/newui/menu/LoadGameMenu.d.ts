import { UiApi } from "newui/INewUi";
import InputButton from "newui/util/InputButton";
import Menu from "newui/util/Menu";
export default class LoadGameMenu extends Menu {
    private slots;
    private slotsWrapper;
    private sort;
    private sortDirection;
    private slotsRemainingHeading;
    private newGameButton;
    constructor(uiApi: UiApi);
    private create();
    private addSlot(slot);
    private deleteSlot(slot);
    private sortSlots(sort?, sortDirection?);
}
export interface SaveSlotData {
    slot: number;
    score: number;
    won: boolean;
    modsUnloadable: any;
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
}
