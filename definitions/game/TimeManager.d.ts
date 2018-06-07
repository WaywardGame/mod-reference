export declare enum TimeFormat {
    /**
     * EX: 3:00pm
     */
    TwelveHour = 0,
    /**
     * EX: 15:00
     */
    TwentyFourHour = 1
}
export declare enum PartOfDay {
    Nighttime = "Nighttime",
    Dawn = "Dawn",
    Sunrise = "Sunrise",
    Daytime = "Daytime",
    Sunset = "Sunset",
    Dusk = "Dusk"
}
export declare enum DayQuarter {
    Day1 = 0,
    Day2 = 1,
    Day3 = 2,
    Day4 = 3,
    Night1 = 4,
    Night2 = 5,
    Night3 = 6,
    Night4 = 7
}
export interface ITimeManager {
    /**
     * The percentage of the day which is night. Changing this field will inversely affect `dayPercent`
     */
    nightPercent: number;
    /**
     * The percentage of the day which is day. Changing this field will inversely affect `nightPercent`
     */
    dayPercent: number;
}
export default class TimeManager implements ITimeManager {
    dayLength: number;
    transitionPercent: number;
    dayStart: number;
    private _ticks;
    private _dayPercent;
    constructor(turns: number);
    /**
     * The total number of ticks passed.
     */
    readonly ticks: number;
    /**
     * Returns which day it is. Starts at 1.
     */
    readonly day: number;
    /**
     * Increments `ticks`.
     */
    nextTick(): void;
    dayPercent: number;
    nightPercent: number;
    /**
     * Returns a decimal representation of the current time. `0` is the start of the day, and `1` is the end.
     */
    getTime(): number;
    /**
     * Returns if the given time is at day.
     * @param time The time to check, defaulting to the current time.
     */
    isDay(time?: number): boolean;
    /**
     * Returns if the given time is at night.
     * @param time The time to check, defaulting to the current time.
     */
    isNight(time?: number): boolean;
    /**
     * Checks if the given time is after a formatted time.
     * @param checkTime A formatted time.
     * @param time The time to check, defaulting to the current time.
     */
    isPast(checkTime: string, time?: number): boolean | undefined;
    /**
     * Checks if the given time is before a formatted time.
     * @param checkTime A formatted time.
     * @param time The time to check, defaulting to the current time.
     */
    isBefore(checkTime: string, time?: number): boolean | undefined;
    /**
     * Returns if the given time is between two formatted times.
     * @param checkPast A formatted time to check if the given time is after.
     * @param checkBefore A formatted time to check if the given time is before.
     * @param time The time to check, defaulting to the current time.
     *
     * Internally calls `isPast` and `isBefore`
     */
    isBetween(checkPast: string, checkBefore: string, currentTime?: number): boolean | undefined;
    /**
     * Returns the hours and minutes of the given time.
     * @param time The time to use, defaulting to the current time.
     */
    getHoursAndMinutes(time?: number): {
        hour: number;
        minute: number;
    };
    /**
     * Returns the hour of the given time.
     * @param time The time to use, defaulting to the current time.
     *
     * Internally calls `getHourMinute`
     */
    getHour(time?: number, format?: TimeFormat): number;
    /**
     * Returns the minute of the given time.
     * @param time The time to use, defaulting to the current time.
     *
     * Internally calls `getHourMinute`
     */
    getMinute(time?: number): number;
    /**
     * Returns the `PartOfDay` of the given time.
     * @param time The time to use, defaulting to the current time.
     */
    getPartOfDay(time?: number): PartOfDay;
    /**
     * Returns the `DayQuarter` of the given time.
     * @param time The time to use, defaulting to the current time.
     */
    getDayQuarter(time?: number): DayQuarter;
    /**
     * Returns a string representation of the given time.
     * @param time The time to use, defaulting to the current time.
     * @param format The format to use, defaulting to `TimeFormat.TwelveHour`
     */
    getFormatted(time?: number, format?: TimeFormat): string;
    /**
     * Returns how bright it is at the given time.
     * @param time The time to use, defaulting to the current time.
     */
    getBrightness(time?: number): number;
    /**
     * Sets the current time from a `dayNight` number and a `boolean` flag of whether it's day or night.
     *
     * Used exclusively for save conversion.
     */
    restoreFromDayNight(dayNight: number, dayNightSwitch: 0 | 1): void;
    /**
     * Sets the time.
     * @param time A number between `0` and `1`, where `0` is the start of the day and `1` is the end.
     *
     * Setting the time with the result of `getTime` will likely not set to the same value.
     * This method is provided for save conversion and utility, and should rarely be used.
     */
    setTime(time: number): void;
    /**
     * The time returned by the time manager ignores that it's stored relative to the start of the day.
     * This method "realigns" a time from this version to one offset by the start of the day.
     * Formula: `0` -> `0 + dayStart / dayLength + transitionPercent / 4`
     */
    private realignTime;
}
