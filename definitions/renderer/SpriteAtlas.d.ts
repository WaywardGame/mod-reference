import { ISpriteAtlas, ISpriteInfoList } from "renderer/ISpriteAtlas";
import ISpriteInfo from "renderer/ISpriteInfo";
export default class SpriteAtlas implements ISpriteAtlas {
    corpses: ISpriteInfoList;
    creatures: ISpriteInfoList;
    items: ISpriteInfoList;
    itemsEquipped: ISpriteInfoList;
    itemsSmall: ISpriteInfoList;
    npcs: ISpriteInfoList;
    overlay: ISpriteInfoList;
    playerBody: ISpriteInfo;
    playerHairstyles: ISpriteInfoList;
    playerSleeping: ISpriteInfo;
    raft: ISpriteInfo;
    shadow: ISpriteInfo;
    sleeps: ISpriteInfoList;
    statusEffects: ISpriteInfoList;
    text: ISpriteInfo;
    tileEvents: ISpriteInfoList;
    zzz: ISpriteInfo;
}
