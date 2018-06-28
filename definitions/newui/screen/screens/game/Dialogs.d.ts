import { IVector2 } from "utilities/math/IVector";
export declare enum DialogId {
    Messages = 0,
    Notes = 1,
    MessagesEditFilters = 2,
    QuickSettings = 3
}
export declare enum Edge {
    Top = 0,
    Right = 1,
    Bottom = 2,
    Left = 3
}
export declare type IEdges = [[Edge.Left | Edge.Right, number], [Edge.Top | Edge.Bottom, number]];
export interface IDialogDescription {
    minSize: IVector2;
    size: IVector2;
    maxSize: IVector2;
    edges: IEdges;
}
declare const dialogDescriptions: Description2<DialogId, IDialogDescription>;
export default dialogDescriptions;
