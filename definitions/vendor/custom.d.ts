declare var process: any;
declare var gc: any;

declare var require: {
    (path: string): any;
};

interface JQuery {
    sort(p: (a: any, b: any) => boolean): any;
}

declare module JQueryUI {
    interface UI {
        sortable: any;
    }
}

interface HTMLAnchorElement {
    download: string
}

interface Document {
    cancelFullScreen: any;
    mozCancelFullScreen: any;
}

interface CanvasRenderingContext2D {
    imageSmoothingEnabled: boolean;
}
