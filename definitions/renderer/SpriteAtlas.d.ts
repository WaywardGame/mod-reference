import { ISpriteAtlas, ISpriteInfoList } from "renderer/ISpriteAtlas";
import ISpriteInfo from "renderer/ISpriteInfo";
export default class SpriteAtlas implements ISpriteAtlas {
    corpses: ISpriteInfoList;
    creatures: ISpriteInfoList;
    equips: ISpriteInfoList;
    hairstyles: ISpriteInfoList;
    items: ISpriteInfoList;
    itemsSmall: ISpriteInfoList;
    player: ISpriteInfo;
    raft: ISpriteInfo;
    shadow: ISpriteInfo;
    sleeps: ISpriteInfoList;
    sleepyHead: ISpriteInfo;
    text: ISpriteInfo;
    tileEvents: ISpriteInfoList;
    zzz: ISpriteInfo;
}
