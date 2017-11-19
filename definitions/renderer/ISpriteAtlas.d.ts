import ISpriteInfo from "renderer/ISpriteInfo";
export interface ISpriteInfoList {
    [index: number]: ISpriteInfo | undefined;
}
export interface ISpriteAtlas {
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
export default ISpriteAtlas;
