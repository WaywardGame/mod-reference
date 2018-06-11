import { IGenericManager, IGenericRegistration } from "game/IGenericManager";
import { LogSource } from "utilities/Log";
export default abstract class GenericManager<T extends IGenericRegistration> implements IGenericManager<T> {
    private readonly registered;
    constructor();
    abstract setup(instance: GenericManager<T>): void;
    add(registration: T): void;
    get(type: number): T;
    remove(type: number): void;
    protected abstract getSource(): LogSource;
    protected abstract getEnumObject(): any;
    private check;
}
