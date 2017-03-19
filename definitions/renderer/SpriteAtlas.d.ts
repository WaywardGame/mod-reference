import { ISpriteAtlas, ISpriteInfoList } from "renderer/ISpriteAtlas";
import ISpriteInfo from "renderer/ISpriteInfo";
export default class SpriteAtlas implements ISpriteAtlas {
    creatures: ISpriteInfoList;
    corpses: ISpriteInfoList;
    tileEvents: ISpriteInfoList;
    items: ISpriteInfoList;
    itemsSmall: ISpriteInfoList;
    equips: ISpriteInfoList;
    hairstyles: ISpriteInfoList;
    shadow: ISpriteInfo;
    player: ISpriteInfo;
    raft: ISpriteInfo;
    text: ISpriteInfo;
}
