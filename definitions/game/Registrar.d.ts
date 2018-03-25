export interface IRegistrarItem {
    getRegistrarId(): number;
    setRegistrarId(id: number): void;
}
export default class Registrar<T extends IRegistrarItem> {
    private readonly registrations;
    private baseItem;
    get(id: number): T | undefined;
    isBase(item: T): boolean;
    usesBase(id: number): boolean;
    registerBase(item: T): void;
    register(item: T, id?: number): void;
    unregister(item: T): void;
}
