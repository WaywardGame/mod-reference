import ISpriteInfo from "renderer/ISpriteInfo";
export interface ISpriteInfoList {
    [index: number]: ISpriteInfo | undefined;
}
export interface ISpriteAtlas {
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
export default ISpriteAtlas;
