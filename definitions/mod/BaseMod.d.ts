import { ActionCallback } from "action/IAction";
import { ICreatureDescription } from "creature/ICreature";
import { IDoodadDescription } from "doodad/IDoodad";
import { ItemType, ITerrainResourceItem } from "Enums";
import { IActionDescription, IItemDescription } from "item/IItem";
import { ILanguageExtension } from "language/ILanguage";
import { IHairstyleDescription } from "player/IPlayer";
import { ISkillDescription } from "player/Skills";
import { ITerrainDescription } from "tile/ITerrain";
import { IDialogInfo } from "ui/IUi";
export declare abstract class BaseMod {
    private index;
    private buttons;
    private allocatedEnums;
    constructor(index: number);
    getIndex(): number | undefined;
    getName(): string | undefined;
    getPath(): string | undefined;
    loadFile(file: string, callback: (fileText: string, success: boolean) => void): boolean;
    createOptionsSection(translationId: string): JQuery;
    removeOptionsSection(section: JQuery): void;
    createButton(translationId: string, imagePath: string, keyBind?: number): JQuery;
    removeButton(button: JQuery): void;
    getButtons(): JQuery;
    createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
    getDialog(title: string): JQuery;
    addActionType(description: IActionDescription, callback: ActionCallback): number;
    addSkillType(description: ISkillDescription): number;
    addMusic(name: string): number;
    addSoundEffect(name: string, variations?: number): number;
    addHairstyle(description: IHairstyleDescription): number;
    addItem(description: IItemDescription): number;
    addCreature(description: ICreatureDescription): number;
    addTerrain(description: ITerrainDescription, terrainType?: number): number;
    addTerrainResource(terrainType: number, terrainResource: ITerrainResourceItem[], defaultItem?: ItemType): void;
    addDoodad(description: IDoodadDescription): number;
    addDictionary(name: string, dictionaryEnum: any): number;
    extendLanguage(language: string, extension: ILanguageExtension): void;
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
