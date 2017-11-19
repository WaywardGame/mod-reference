import { ISpriteAtlas, ISpriteInfoList } from "renderer/ISpriteAtlas";
import ISpriteInfo from "renderer/ISpriteInfo";
export default class SpriteAtlas implements ISpriteAtlas {
    corpses: ISpriteInfoList;
    creatures: ISpriteInfoList;
    itemsEquipped: ISpriteInfoList;
    playerHairstyles: ISpriteInfoList;
    items: ISpriteInfoList;
    itemsSmall: ISpriteInfoList;
    playerBody: ISpriteInfo;
    raft: ISpriteInfo;
    shadow: ISpriteInfo;
    sleeps: ISpriteInfoList;
    playerSleeping: ISpriteInfo;
    text: ISpriteInfo;
    tileEvents: ISpriteInfoList;
    zzz: ISpriteInfo;
}
