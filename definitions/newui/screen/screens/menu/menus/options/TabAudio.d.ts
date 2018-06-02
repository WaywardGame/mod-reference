import { IRefreshable } from "newui/component/Refreshable";
import { UiApi } from "newui/INewUi";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class TabAudio extends Tab implements IRefreshable {
    private readonly inputVolumeMusic;
    private readonly inputVolumeEffects;
    constructor(api: UiApi);
    refresh(): this;
    private onMuteEffects(_, checked);
    private onEffectVolumeChange(_, val);
    private onEffectVolumeChangeFinish(_, val);
    private onMuteMusic(_, checked);
    private onMusicVolumeChange(_, val);
    private nextTrack();
}
