/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
/**
 * Choices for interrupts
 */
declare enum InterruptChoice {
    Cancel = 0,
    ContinueAnyway = 1,
    LocalFile = 2,
    No = 3,
    Ok = 4,
    OpenSaveFolderAndQuit = 5,
    Quit = 6,
    Rejoin = 7,
    Rename = 8,
    Retry = 9,
    SteamWorkshop = 10,
    Yes = 11
}
export default InterruptChoice;
