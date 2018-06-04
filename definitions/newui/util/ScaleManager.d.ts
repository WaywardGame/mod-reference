import { IScaleManager, UiApi } from "newui/INewUi";
export default class ScaleManager implements IScaleManager {
    private readonly api;
    constructor(api: UiApi);
    getMinimum(): number;
    getMaximum(): number;
    getCurrent(): number;
    getRequested(): number;
    request(scale: number): void;
    update(): void;
}
