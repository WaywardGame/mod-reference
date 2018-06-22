export interface IGenericRegistration {
    type: number;
}
export interface IGenericManager<T> {
    add(registration: T): void;
    get(type: number): T | undefined;
    remove(type: number): void;
}
