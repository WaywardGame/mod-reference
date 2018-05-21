import { IVector2 } from "utilities/math/IVector";
export declare enum DialogId {
    Messages = "Messages",
    Notes = "Notes",
}
export declare enum Edge {
    Top = 0,
    Right = 1,
    Bottom = 2,
    Left = 3,
}
export interface IDialogDescription {
    minSize: IVector2;
    size: IVector2;
    maxSize: IVector2;
    edges: [[Edge.Left | Edge.Right, number], [Edge.Top | Edge.Bottom, number]];
}
declare const _default: {
    Messages: IDialogDescription;
    Notes: IDialogDescription;
};
export default _default;
