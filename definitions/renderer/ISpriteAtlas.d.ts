import ISpriteInfo from "renderer/ISpriteInfo";
export interface ISpriteInfoList {
    [index: number]: ISpriteInfo | undefined;
}
export interface ISpriteAtlas {
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
export default ISpriteAtlas;
