export interface IRegistrarItem {
    setId(id: number): void;
}
export default class Registrar<T extends IRegistrarItem> {
    private readonly registrations;
    get(id: number): T;
    register(item: T): void;
    unregister(items: T): void;
}
