import HookCallFactory from "mod/HookCallFactory";
import { Hook } from "mod/IHookManager";
declare const descriptions: {
    [K in Hook]: HookCallFactory<K>;
};
export default descriptions;
