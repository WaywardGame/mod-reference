/*
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 * 
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 * 
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */

declare var process: any;
declare var gc: any;

declare var gameVersion: string;
declare var gameVersionStage: string;
declare var gameVersionMajor: number;
declare var gameVersionMinor: number;
declare var gameVersionPatch: number;

declare var isEdge: boolean;
declare var overlayWorks: boolean | undefined;
declare var webGlVersion: number;

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

interface IMatchmakingServer {
	start(port?: number, serverClientMode?: boolean): string;
	stop(): void;
	getConnections(): { [index: string]: IMatchmakingServerConnection };
	addOnConnectCallback(callback: (id: string, connection: any) => void): void;
	addOnDisconnectCallback(id: string, callback: () => void): void;
	addOnMessageCallback(id: string, callback: (data: ArrayBuffer) => void): void;
}

interface IMatchmakingServerConnection {
	send(data: ArrayBuffer): void;
}

declare var require: IRequire;
declare var requirejs: IRequire;

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
