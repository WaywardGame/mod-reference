# Modding Guide

## Table of Contents

* [Intro](https://github.com/WaywardGame/mod-reference#intro)
* [Workflow/Editor](https://github.com/WaywardGame/mod-reference#workfloweditor)
* [Examples](https://github.com/WaywardGame/mod-reference#examples)
* [Hooks](https://github.com/WaywardGame/mod-reference#hooks)
* [Hello World](https://github.com/WaywardGame/mod-reference#hello-world)
	* [Intro](https://github.com/WaywardGame/mod-reference#intro-1)
	* [Setup](https://github.com/WaywardGame/mod-reference#setup)
	* [/.vscode/tasks.json](https://github.com/WaywardGame/mod-reference#vscodetasksjson)
	* [/mod-reference/](https://github.com/WaywardGame/mod-reference#mod-reference)
	* [mod.json](https://github.com/WaywardGame/mod-reference#modjson)
	* [tsconfig.json](https://github.com/WaywardGame/mod-reference#tsconfigjson)
	* [helloworld.ts](https://github.com/WaywardGame/mod-reference#helloworldts)
* [Publishing](https://github.com/WaywardGame/mod-reference#publishing)
* [Disclaimer](https://github.com/WaywardGame/mod-reference#disclaimer)

## Intro

Wayward is primarily built using HTML5 technologies, and uses TypeScript (a strict superset of JavaScript), which compiles down to normal JavaScript. This is then run through Electron, a cross-platform application that runs browser languages as a desktop app, outside of your browser. 

You are not required to use TypeScript in your mods; however, it will become harder to maintain and manage your mods using standard JavaScript. Plus, with TypeScript you will get auto completion on all our internal functions and hooks. TypeScript also has strict compilation and error checking, removing a lot of debugging work. This guide is only tailored towards building TypeScript modifications for Wayward.

Wayward uses a combination of HTML, CSS, JavaScript, and WebGL (shaders) for all rendering and UI. It is not necessary to have skills and knowledge in these things to begin modding, although it wouldn't hurt.

NOTE: Wayward modding support is Early Access (or beta), just like Wayward itself is. Many things will change and improve over time. Let us know any issues you run into or if you have any ideas for us.

## Workflow/Editor

Follow along in this section if you are not familiar with TypeScript. To compile and write mods for Wayward, you will need an IDE or editor that supports TypeScript. If you are comfortable with the likes of Node.js and NPM you can set up TypeScript yourself with a variety of editors including Sublime, Atom, WebStorm, Visual Studio and more. Visit the [TypeScript site](http://www.typescriptlang.org/#download-links) for more information. This guide will use a Visual Studio Code setup below if you need help getting started.

**Visual Studio Code**

Visual Studio Code (currently in beta) is a free, cross-platform, open source editor from Microsoft written with JavaScript and deployed via Electron, just like Wayward! It has built-in support for TypeScript.

Download VS Code here: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

Install it with the default options/settings.

**Node.js/NPM/TypeScript**

Before you can build/compile in VS Code (or other editors/IDEs) you will need Node.js (NPM) and TypeScript. Download and install Node.js: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Once you install Node.js, you will have access to NPM, or "Node Package Manager", which allows you to install TypeScript. Open your terminal (Linux/Mac OS X) or command prompt (Windows) and run the following command: 

`npm install -g typescript`

## Examples

All official Wayward modifications are open source, allowing you to see how to mod various elements of Wayward. We have a GitHub organization with repositories for all of our mods and examples located here: [https://github.com/WaywardGame](https://github.com/WaywardGame)

If you are familiar with Git and/or GitHub, checking out or cloning the repositories should be fairly self-explanatory. If you are not familiar, you can simply browse the files in each repository for the mods. Clicking on the files will display their contents. There is also a "Download ZIP" button located near the top right hand side of each of the main repository pages which will download a .zip file, containing all the resources to view the files and edit them on your computer.

If you are not familiar with Git or GitHub at all and want to learn, we would suggest you try out GitHub Desktop: [https://desktop.github.com/](https://desktop.github.com/)

GitHub Desktop also has a handy help section to you get started:

* [Getting Started with GitHub Desktop](https://help.github.com/desktop/guides/getting-started/)
* [Contributing to Projects with GitHub Desktop](https://help.github.com/desktop/guides/contributing/)

## Hooks

The main functionality of Wayward modding comes from hooks. Hooks are special places in our code where we have enabled mods to overwrite or modify functionality within Wayward. If you are not familiar with hooks, you will see how they can be used in the _Hello World_ section.

Here's a list of all the current Wayward hooks:

* CalculateMonsterMoveType
* CanConsumeItem
* CanMonsterAttack
* CanMonsterMove
* CanSeeMonster
* GetAmbientColorCave
* GetAmbientColorDay
* GetAmbientColorNight
* GetAmbientLightLevel
* GetMonsterSpriteBatchLayer
* GetPlayerSpriteBatchLayer
* IsPlayerSwimming
* OnAddOrUpdateInventoryItem
* OnBuild
* OnCreateWorld
* OnDisplayMessage
* OnGameEnd
* OnGameStart
* OnItemEquip
* OnKeyBindPress
* OnKeyDown
* OnKeyUp
* OnMonsterDeath
* OnMouseDown
* OnMouseMove
* OnMouseScroll
* OnMouseUpOrLeave
* OnMove
* OnMoveDirectionUpdate
* OnNoInputReceived
* OnPlayerDamage
* OnShowInGameScreen
* OnSpawnMonsterFromGroup
* OnTurnComplete
* OnTurnStart
* PostGenerateWorld
* PostRender
* PostRenderWorld
* PostRenderPostProcess
* PreRender
* PreRenderWorld
* PreRenderPostProcess
* ProcessInput
* ShouldRender

## Hello World

### **Intro**

This section assumes you have an editor capable of compiling TypeScript files, and uses Visual Studio Code as a reference for keybinds and functionality. It should also be noted that this is not a TypeScript tutorial. If you want to learn the TypeScript language, please read through the official [Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html).

The first step of developing a Wayward modification is setting up the primary files. You can skip this guide and file setup by downloading/checking out (via GitHub) the Hello World mod in its entirety here: [https://github.com/WaywardGame/helloworld](https://github.com/WaywardGame/helloworld)

For the sake of this tutorial, we will use the "mods" directory within the Wayward Steam directory as the base for your modification. You can get there by clicking the "Open Mods Folder" button inside of the "Manage Mods" menu while in Wayward. Alternatively, you can right-click Wayward from your Steam library and click "Properties". From there you can click the "Local files" tab and select "Browse local files". You are looking for the folder called "mods" within the Wayward folder/directory.

### **Setup**

After you are inside the "mods" folder, create a new folder called "helloworld". Inside there, create the following files and folders:

* /.vscode/tasks.json
* /mod-reference/
* mod.json
* tsconfig.json
* helloworld.ts

### **/.vscode/tasks.json**

Visual Studio Code needs to know that we want to build our mods with TypeScript. Adding a tasks.json file in a new folder named ".vscode" with the following inserted will build your project with Ctrl+Shift+B.
```json
{
	"version": "0.1.0",
	"command": "tsc",
	"isShellCommand": true,
	"showOutput": "silent",
	"args": [],
	"problemMatcher": "$tsc"
}
```

### **/mod-reference/**

The contents of this folder is located here: [https://github.com/WaywardGame/mod-reference/](https://github.com/WaywardGame/mod-reference/)

Refer to the **Examples** section if you are not familiar with GitHub. 

It is recommended you keep this up to date with what is located on GitHub as this will change from version to version of Wayward. This folder contains all the definitions for functions in Wayward so that TypeScript can autocomplete  and compile your mod properly.

### **mod.json**

You can think of the mod.json file as the description file for your mod. It describes what it does and how it behaves. It does this through a set of properties, which we will describe below. It should be updated every time you publish it to Steam. Here's a sample of what it should look like for Hello World:
```json
{
	"name": "Hello World",
	"description": "Hello World is an example mod, shown in the Modding Guide, located here: https://github.com/WaywardGame/mod-reference",
	"version": "1.0.0",
	"author": "Your Name Here",
	"compatible_minor_versions": [
		0
	],
	"unloadable": true,
	"files": [
		"helloworld.js"
	],
	"hooks": [
		"OnGameStart",
		"OnItemEquip",
		"OnMove"
	]
}
```

Most of this should be fairly self-explanatory.

`compatible_minor_versions` will allow your mod to stop from being loaded if the Wayward's game version doesn't match what is set in the array. If you have "0" set here, and Wayward beta version 2.**0**.0 is loaded, then it will run. If you have `"compatible_minor_versions": [ 1 ]` set, then it will only work in version 2.**1**.0. `"compatible_minor_versions": [ 0, 1 ]` will load in both versions 2.0, and 2.1. You may omit this property if you always wants your mod to run, regardless of the game version.

`unloadable` should be set to true if you are *not* adding new things into the game which modify the save data. If you are creating a mod that adds new monsters, items, doodads, terrain you will want to set this to false or omit it completely.

`hooks` will contain a list of Hooks, which represent all the functionality you are modifying in Wayward. Refer to the *Hooks* section for more information. Please note that the hook names in this section are fully *CamelHump* cased.

Other mod.json properties include:

`required_mods` is an array which contains strings of Steam Workshop IDs. It is not included in this example, but looks like the following:
```json
"required_mods": [
	"474819610"
]
```

Set this if you want to require another mod from the Workshop for your mod.

`publishedFileId` is a property that is automatically filled in after your mod is published to the Steam Workshop. Do not modify or manually add this property. Wayward will use this when you publish updates to your mod.

`image_overrides` is a property that will allow you to override default graphics in the game. It will appear like:
```json
"image_overrides": [
	"images/doodad/tree.png"
]
```

You can see an example of this in action in the [Trees on Fire](https://github.com/WaywardGame/treesonfire) mod.

### **tsconfig.json**

tsconfig gives instructions for how TypeScript should compile your project.
```json
{
	"compilerOptions": {
		"target": "es5",
		"module": "commonjs",
		"declaration": true,
		"noImplicitAny": true,
		"removeComments": true,
		"preserveConstEnums": true,
		"outDir": "",
		"sourceMap": true
	}
}
```

This will be the same across all your mods generally. If you want to know more on tsconfig, review the official documentation on it [here](http://www.typescriptlang.org/docs/handbook/tsconfig.json.html).

### **helloworld.ts**

Finally we get to the actual functionality and coding of our mod in helloworld.ts. Let's start with the basics.
```typescript
/// <reference path="mod-reference/modreference.d.ts"/>

class Mod extends Mods.Mod {
	public onInitialize(saveDataGlobal: any): any {
	}

	public onLoad(saveData: any): void {
	}

	public onUnload(): void {
	}

	public onSave(): any {
	}
}
```

You can use this as the basis for all your mods. The first line is for finding the references. This will allow you to autocomplete Wayward functionality and compile correctly. Each modification will use these four events. They are different from hooks in that they will not alter Wayward code directly. Let's add some functionality:
```typescript
private helloWorld: number;

public onLoad(saveData: any): void {
	console.log("Hello World!");
	this.helloWorld = this.addMessage("HelloWorld", "Hello World!");
}

public onUnload(): void {
	console.log("Goodbye World!");
}

// Hooks
public onGameStart(isLoadingSave: boolean, playedCount: number): void {
	ui.displayMessage(this.helloWorld, MessageType.Good);
}
```

Here's where the name of the mod comes from. As you can see, we added new message to the game. It will display "Hello World!" when you start a new game, hence the new onGameStart hook. We also added some console logs to the game. These will not be shown to the player, but can be useful for debbuging or logging information. They will only show when you have your console open. You can do this from the Options menu under "Developer". Let's add some more functionality:
```typescript
private helloLeftHand: number;
private helloRightHand: number;

public onLoad(saveData: any): void {
	console.log("Hello World!");
	this.helloWorld = this.addMessage("HelloWorld", "Hello World!");
	this.helloLeftHand = this.addMessage("HelloLeftHand", "Hello Left Hand!");
	this.helloRightHand = this.addMessage("HelloRightHand", "Hello Right Hand!");
}

public onGameStart(isLoadingSave: boolean, playedCount: number): void {
	ui.displayMessage(this.helloWorld, MessageType.Good);
	Item.defines[ItemType.Branch].name = "A Greetings Stick";
}

public onItemEquip(item: Item.IItem, slot: EquipType): void {
	if (item.type === ItemType.Branch) {
		if (slot === EquipType.LeftHand) {
			ui.displayMessage(this.helloLeftHand, MessageType.None);
		} else {
			ui.displayMessage(this.helloRightHand, MessageType.None);
		}
	}
}
```

Now we have renamed the branches in the game to "A Greetings Stick". We added a new hook (onItemEquip) so that when we equip them, they say hello to our hands. Why? There's so many reasons I don't know where to start! Let's continue:
```typescript
private helloTerrain: number;

public onLoad(saveData: any): void {
	console.log("Hello World!");
	this.helloWorld = this.addMessage("HelloWorld", "Hello World!");
	this.helloLeftHand = this.addMessage("HelloLeftHand", "Hello Left Hand!");
	this.helloRightHand = this.addMessage("HelloRightHand", "Hello Right Hand!");
	this.helloTerrain = this.addMessage("HelloTerrain", "Hello _0_!");
}

public onMove(nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean {
	var getTile = game.getTile(player.x, player.y, player.z);
	var tileType = Utilities.TileHelpers.getType(getTile);
	ui.displayMessage(this.helloTerrain, MessageType.Stat, terrains[tileType].name);
	return undefined;
}
```

Now we say hello to the world, literally. As your player moves, you will say hello to the ground beneath your feet, by name! The full mod now:
```typescript
/// <reference path="mod-reference/modreference.d.ts"/>

class Mod extends Mods.Mod {
	private helloWorld: number;
	private helloLeftHand: number;
	private helloRightHand: number;
	private helloTerrain: number;

	public onInitialize(saveDataGlobal: any): any {
	}

	public onLoad(saveData: any): void {
		console.log("Hello World!");
		this.helloWorld = this.addMessage("HelloWorld", "Hello World!");
		this.helloLeftHand = this.addMessage("HelloLeftHand", "Hello Left Hand!");
		this.helloRightHand = this.addMessage("HelloRightHand", "Hello Right Hand!");
		this.helloTerrain = this.addMessage("HelloTerrain", "Hello _0_!");
	}

	public onUnload(): void {
		console.log("Goodbye World!");
	}

	public onSave(): any {
	}

	// Hooks
	public onGameStart(isLoadingSave: boolean, playedCount: number): void {
		ui.displayMessage(this.helloWorld, MessageType.Good);
		Item.defines[ItemType.Branch].name = "A Greetings Stick";
	}

	public onItemEquip(item: Item.IItem, slot: EquipType): void {
		if (item.type === ItemType.Branch) {
			if (slot === EquipType.LeftHand) {
				ui.displayMessage(this.helloLeftHand, MessageType.None);
			} else {
				ui.displayMessage(this.helloRightHand, MessageType.None);
			}
		}
	}

	public onMove(nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean {
		var getTile = game.getTile(player.x, player.y, player.z);
		var tileType = Utilities.TileHelpers.getType(getTile);
		ui.displayMessage(this.helloTerrain, MessageType.Stat, terrains[tileType].name);
		return undefined;
	}
}
```

You can compile your script with "Ctrl+Shift+B" by default. After it is compiled, you will see a bunch of new files in your helloworld directory. These are the files Wayward will use. If you load Wayward, under "Manage Mods", you will now see your Hello World mod under "Local Mods".

It's not much of a mod, but it works! Please review the *Example* section for a better grasp on what is possible and how to accomplish more in your mods.

## Publishing

After you are happy with your mod, why not publish it to Steam Workshop? You will be able to edit most things via the Steam interface after publishing it, but you'll want to include a few things before releasing it as described below.

**NOTE: Please do not upload the Hello World modification to the Steam Workshop. Make something fun!**

If you place a square formatted .png image in the root mod folder named "mod.png" this will be the thumbnail/main image for the mod when it gets uploaded to the Steam Workshop. We recommend a size of 720x720 pixels, although this gets shrunk down to around 77x77; but normally appears at 268x268 inside the Workshop page, so please use 268x268 as a minimum size.

When you are ready to go, and you have performed all the steps outlined in _Hello World_ section, upon launching Wayward and going in the _Manage Mods_ menu, you will see an "arrow" icon to the right hand side of your mod. Clicking it will allow you to publish your mod to the Steam Workshop. At any point you make changes and build/compile your mod, you can simply click this again to send an update to Steam.

Everything else about your entry is controlled via Steam. This includes uploading screenshots, links, required mod displaying, stats, and more. You can quickly get to your Workshop entry by clicking the "eye" icon next to your mod in the _Manage Mods_ menu listing. You will see a full suite of administrative options on that page if you are logged in to Steam.

## Disclaimer

By submitting a Workshop creation for Wayward, you understand that Wayward is a work in progress. As such, many things will change and be added over time. This can result in the following:

* Your submission becoming obsolete.
* Your submission breaking in functionality as updates are released.
* Your submission becoming an eventual feature within the game.

In the case of breaking functionality, we will try our best to limit such things from happening; however, due to the very nature of a beta/Early Access title, many new ideas, systems, and additions will eventually make it into Wayward. As this is the case, we cannot guarantee your Workshop submission will continue to work indefinitely, nor cannot guarantee that your submission will always be necessary as we may build certain features/functionality/content into the game directly.

Our "[todo](https://trello.com/b/PWX1Hpjn/wayward-todo)" and idea list is huge and it's likely many ideas are already planned for Wayward or were submitted to us previously. If we have in fact taken direct inspiration from your idea/submission, we will always contact you beforehand. The community and player-base has always delivered us great ideas. Steam Workshop allows for those ideas to become reality faster than they would otherwise appear in the game by us.

That being said, we hope this not hinder you from making Wayward into whatever you want and sharing your creativity with the community.

Have fun!