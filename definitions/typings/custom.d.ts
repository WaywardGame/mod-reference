declare var process: any;
declare var gc: any;

declare var gameVersion: string;
declare var gameVersionStage: string;
declare var gameVersionMajor: number;
declare var gameVersionMinor: number;
declare var gameVersionPatch: number;

declare var isEdge: boolean;
declare var quickLoad: number | undefined;
declare var overlayWorks: boolean | undefined;

interface IRequire {
	s: any;
	undef(path: string): void;
	onResourceLoad(ctx: any, map: any): void;
	(moduleName: string): any | undefined;
	(moduleNames: string[], onLoad: (...args: any[]) => void, onError: (err: any) => void): void;
}

interface JQuery {
	reflow(): JQuery;
	repaint(): JQuery;

	filterByData(name: string, value: any): JQuery;
	contextmenu(p: any, p2?: any, p3?: any): any;
	isVisible(): boolean;
	quickShow(): void;
	quickHide(): void;
	preload(): void;

	getQuickSlot(): number;
	getEquipSlot(): number;
}

declare var requirejs: IRequire;
declare var requireelectron: IRequire;

interface Window {
	define: any;
}

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

interface HTMLMediaElement {
	play(): Promise<any>;
}
