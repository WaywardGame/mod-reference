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
import { IImageOverrideDescription } from "mod/IModInfo";
import { IResourceContainer, IResourceLoader } from "resources/IResourceLoader";
import ResolvablePromise from "utilities/promise/ResolvablePromise";
export default class ResourceLoader implements IResourceLoader {
    private concurrent;
    private loadingCount;
    private loadingInterval;
    private waitingSlots;
    private callback;
    private readonly maxConcurrent;
    private spritePacker;
    private tilePacker;
    private imageOverrides;
    initialize(gl: WebGL2RenderingContext): void;
    loadResources(container: IResourceContainer): ResolvablePromise;
    continueLoading(): void;
    takeLoadingSlot(callback: () => void): void;
    releaseLoadingSlot(): void;
    getImageOverride(src: string): Partial<IImageOverrideDescription> | undefined;
    updateImageOverrides(): void;
    private loadResourcesInternal;
    private loadCharacter;
    private loadCreatures;
    private loadCreature;
    private loadCorpses;
    private loadCorpse;
    private loadItems;
    private loadItem;
    private loadEquip;
    private loadSleep;
    private loadTerrains;
    private loadTerrain;
    private loadDoodads;
    private loadDoodad;
    private loadDoodadItems;
    private loadDoodadItem;
    private loadTileEvents;
    private loadTileEvent;
    private loadHairstyles;
    private loadHairstyle;
    private loadStatuses;
    private loadStatus;
    private loadOverlays;
    private loadOverlay;
    private loadOthers;
}
