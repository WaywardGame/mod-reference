import { UiApi } from "newui/INewUi";
import Menu from "newui/util/Menu";
export default class MultiplayerMenu extends Menu {
    private openServer;
    private lobbyType;
    private choiceLobbyFriends;
    private choiceLobbyPublic;
    private choiceLobbyPrivate;
    private pvp;
    private maxPlayers;
    private tickSpeed;
    constructor(uiApi: UiApi);
    private refresh();
}
