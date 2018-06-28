import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class TabAudio extends Tab implements IRefreshable {
    private readonly inputVolumeMusic;
    private readonly inputVolumeEffects;
    constructor(api: UiApi);
    refresh(): this;
    private onMuteEffects;
    private onEffectVolumeChange;
    private onEffectVolumeChangeFinish;
    private onMuteMusic;
    private onMusicVolumeChange;
    private nextTrack;
}
