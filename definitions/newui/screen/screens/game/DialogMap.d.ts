import Dialog from "newui/screen/screens/game/component/Dialog";
import { DialogId } from "newui/screen/screens/game/Dialogs";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
declare const dialogMap: {
    [key in DialogId]: new (gsapi: IGameScreenApi) => Dialog;
};
export default dialogMap;
