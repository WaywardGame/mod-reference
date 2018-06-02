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
    constructor(api: UiApi, slot: number);
    private onExport();
    private getTooltip(tooltip);
    private rename(newName);
    private load();
    private exportToWorkshop();
    private exportToFile();
    private isLoadable(publishId);
}
