import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
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
    private refresh;
}
