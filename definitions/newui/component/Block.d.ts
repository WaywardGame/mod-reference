import Component from "newui/component/Component";
import Text from "newui/component/Text";
import { UiApi } from "newui/INewUi";
export declare class Block extends Component {
    constructor(uiApi: UiApi);
    addText(textInitializer: (text: Text) => any): this;
}
