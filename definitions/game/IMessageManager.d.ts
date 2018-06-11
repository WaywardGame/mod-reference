export declare enum Source {
    /**
     * Every message
     */
    All = 0,
    /**
     * Messages sent by a player
     */
    Chat = 1,
    /**
     * Any non-chat message
     */
    Game = 2,
    /**
     * Messages pertaining to creatures or combat
     */
    Combat = 3,
    /**
     * Messages pertaining to skills that are raised
     */
    Skill = 4,
    /**
     * Messages pertaining to your wellbeing — stats, status effects, etc.
     */
    Wellbeing = 5,
    /**
     * Messages pertaining to milestones
     */
    Milestone = 6,
    /**
     * Messages in response to a command
     */
    Command = 7,
    /**
     * Messages about the metagame — saving the game, exiting the game, pausing/unpausing, etc.
     */
    Meta = 8,
    /**
     * Messages pertaining to multiplayer
     */
    Multiplayer = 9,
    /**
     * Messages referring to your equipment. Tools, armour, things breaking, etc
     */
    Equipment = 10,
    /**
     * Messages referring to the actions you just took
     */
    Action = 11,
    /**
     * Messages pertaining to your allies (tamed creatures, NPCs, and other players (including in PVP))
     */
    Allies = 12
}
