/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import Component from "newui/component/Component";
import { ITooltip, TooltipLocation } from "newui/component/IComponent";
import Text, { Paragraph } from "newui/component/Text";
export default class Tooltip extends Component implements ITooltip {
    private readonly source;
    event: IEventEmitter<this, Events<ITooltip>>;
    readonly location: TooltipLocation;
    cache: boolean;
    private box;
    private sourceBox;
    private lastBoxTime;
    constructor(source: Component);
    setLocation(location: TooltipLocation): this;
    /**
     * Sets the max width of this tooltip.
     * @param maxWidth If a number, the max-width of the tooltip is this value * ui scale. If a string, the value is used directly.
     */
    setMaxWidth(maxWidth?: number | string): this;
    setNoCache(): this;
    addText(initializer: (text: Text) => any): this;
    addHeading(initializer: (text: Text) => any): this;
    addParagraph(initializer: (text: Paragraph) => any): this;
    addList(...initializers: Array<((text: Text) => any) | undefined | false>): this;
    updatePosition(position?: {
        x: number;
        y: number;
    }, force?: boolean): this;
    private onShow;
    private onHide;
    private onMouseMove;
}
