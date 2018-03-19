import HookCallFactory from "mod/HookCallFactory";
import { Hook } from "mod/IMod";
declare const descriptions: {
    [K in Hook]: HookCallFactory<K>;
};
export default descriptions;
