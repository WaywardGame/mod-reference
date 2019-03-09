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
import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class TabAudio extends Tab implements IRefreshable {
    private readonly volumeEffects;
    private readonly volumeMusic;
    constructor(api: UiApi);
    refresh(): this;
    private onMuteEffects;
    private onEffectVolumeChange;
    private onEffectVolumeChangeFinish;
    private onMuteMusic;
    private onMusicVolumeChange;
    private nextTrack;
}
