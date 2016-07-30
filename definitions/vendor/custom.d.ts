declare var process: any;
declare var gc: any;

declare var gameVersion: string;
declare var gameVersionMinor: number;

declare var game: Game;
declare var audio: WAudio;
declare var ui: UI.Ui;
declare var player: Player;
declare var world: World;
declare var renderer: WorldRenderer;

declare var quickLoad: number;

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
    download: string;
}

interface Document {
    cancelFullScreen: any;
    msExitFullscreen: any;
    mozCancelFullScreen: any;
}

interface CanvasRenderingContext2D {
    imageSmoothingEnabled: boolean;
}
