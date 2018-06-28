export default class Queue<T> {
    private queue;
    private offset;
    constructor(initial?: T[]);
    getLength(): number;
    isEmpty(): boolean;
    enqueue(value: T): void;
    dequeue(): T | undefined;
    isInQueue(item: T, equals?: (item1: T, item2: T) => boolean): boolean;
}
