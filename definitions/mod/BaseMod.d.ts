import { ActionCallback } from "action/IAction";
import { ICreatureDescription } from "creature/ICreature";
import { IDoodadDescription } from "doodad/IDoodad";
import { ItemType } from "Enums";
import { IActionDescription, IItemDescription } from "item/IItem";
import { IHairstyleDescription } from "player/IPlayer";
import { ISkillDescription } from "player/Skills";
import { ITerrainDescription, ITerrainResourceItem } from "tile/ITerrain";
import { IDialogInfo } from "ui/IUi";
export declare abstract class BaseMod {
    private index;
    private optionSectionId;
    private buttonId;
    private buttons;
    private allocatedEnums;
    constructor(index: number);
    getIndex(): number | undefined;
    getName(): string | undefined;
    getPath(): string | undefined;
    loadFile(file: string, callback: (fileText: string, success: boolean) => void): boolean;
    createOptionsSection(sectionName: string): JQuery;
    removeOptionsSection(sectionName: string): void;
    createButton(buttonName: string, imagePath: string, tooltip: string, keyBind?: number): JQuery;
    removeButton(buttonName: string): void;
    getButtons(): IButton[];
    createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
    getDialog(title: string): JQuery;
    addActionType(description: IActionDescription, callback: ActionCallback): number;
    addSkillType(description: ISkillDescription): number;
    addHairstyle(description: IHairstyleDescription): number;
    addItem(description: IItemDescription): number;
    addCreature(description: ICreatureDescription): number;
    addTerrain(description: ITerrainDescription, terrainType?: number): number;
    addTerrainResource(terrainType: number, terrainResource: ITerrainResourceItem[], defaultItem?: ItemType): void;
    addDoodad(description: IDoodadDescription): number;
    addMessage(name: string, message: string): number;
    addKeyBind(name: string, defaultKeyCode: number): number;
    itemNameToObjectType(name: string): ItemType | undefined;
    getItemByType(itemType: ItemType): IItemDescription | undefined;
    getItemByName(name: string): IItemDescription | undefined;
    /**
     * This is called internally after unloading a mod
     */
    unallocateEnums(): void;
    private allocateEnum(id, name, objectValue?, onAllocate?, onUnallocate?);
}
export default BaseMod;
export interface IButton {
    name: string;
    tooltip: string;
    keyBind?: number;
}
