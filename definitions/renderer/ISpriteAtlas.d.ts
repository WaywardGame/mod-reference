import ISpriteInfo from "renderer/ISpriteInfo";
export interface ISpriteInfoList {
    [index: number]: ISpriteInfo;
}
export interface ISpriteAtlas {
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
export default ISpriteAtlas;
