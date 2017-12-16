import { Source } from "Enums";
import { IGenericManager, IGenericRegistration } from "game/IGenericManager";
export default abstract class GenericManager<T extends IGenericRegistration> implements IGenericManager<T> {
    private registered;
    constructor();
    abstract setup(instance: GenericManager<T>): void;
    add(registration: T): void;
    get(type: number): T;
    remove(type: number): void;
    protected abstract getSource(): Source;
    protected abstract getEnumObject(): any;
    private check();
}
