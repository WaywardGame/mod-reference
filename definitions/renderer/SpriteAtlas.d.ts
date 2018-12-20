/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import { ISpriteAtlas, ISpriteInfoList } from "renderer/ISpriteAtlas";
import ISpriteInfo from "renderer/ISpriteInfo";
export default class SpriteAtlas implements ISpriteAtlas {
    corpses: ISpriteInfoList;
    creatures: ISpriteInfoList;
    items: ISpriteInfoList;
    itemsEquipped: ISpriteInfoList;
    itemsSmall: ISpriteInfoList;
    miss: ISpriteInfo;
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
