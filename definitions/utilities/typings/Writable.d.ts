declare type Writable<T extends {
    [x: string]: any;
}, K extends string> = {
    [P in K]: T[P];
};
