export interface IRefreshable {
    refresh(): this;
}
export interface IRefreshableValue<T> extends IRefreshable {
    setRefreshMethod(refresh: () => T): this;
}
