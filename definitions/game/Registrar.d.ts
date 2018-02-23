export interface IRegistrarItem {
    getRegistrarId(): number;
    setRegistrarId(id: number): void;
}
export default class Registrar<T extends IRegistrarItem> {
    private readonly registrations;
    get(id: number): T;
    register(item: T, id?: number): void;
    unregister(item: T): void;
}
