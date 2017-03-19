import { IVersionInfo } from "Enums";
import { IChangelog, ITrello, ITrelloBoard } from "trello/ITrello";
export default class Trello implements ITrello {
    getChangelog(versionInfo: IVersionInfo): Promise<IChangelog | undefined>;
    getVersions(board?: ITrelloBoard): Promise<IVersionInfo[]>;
    private getCards(list);
    private getBoard(boardId, checkClosed?);
    private getListVersionInfo(list);
    private findChangelogList(versionInfo, board?);
    private parseChangelog(changelogData);
}
