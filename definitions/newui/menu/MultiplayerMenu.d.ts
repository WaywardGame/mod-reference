import Menu from "newui/element/Menu";
import { UiApi } from "newui/INewUi";
export default class MultiplayerMenu extends Menu {
    private readonly openServer;
    private readonly pause;
    private readonly lobbyType;
    private readonly choiceLobbyFriends;
    private readonly choiceLobbyPublic;
    private readonly choiceLobbyPrivate;
    private readonly pvp;
    private readonly maxPlayers;
    private readonly tickSpeed;
    constructor(uiApi: UiApi);
    private refresh();
}
