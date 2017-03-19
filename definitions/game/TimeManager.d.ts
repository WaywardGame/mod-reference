export declare enum TimeFormat {
    TwelveHour = 0,
    TwentyFourHour = 1,
}
export declare enum PartOfDay {
    Nighttime = 0,
    Dawn = 1,
    Sunrise = 2,
    Daytime = 3,
    Sunset = 4,
    Dusk = 5,
}
export declare enum DayQuarter {
    Day1 = 0,
    Day2 = 1,
    Day3 = 2,
    Day4 = 3,
    Night1 = 4,
    Night2 = 5,
    Night3 = 6,
    Night4 = 7,
}
export default class TimeManager {
    dayLength: number;
    transitionPercent: number;
    dayStart: number;
    private _ticks;
    private _dayPercent;
    constructor(turns: number);
    restoreFromDayNight(dayNight: number, dayNightSwitch: 0 | 1): void;
    getPartOfDay(time?: number): PartOfDay;
    getDayQuarter(time?: number): DayQuarter;
    readonly ticks: number;
    nextTick(): void;
    dayPercent: number;
    nightPercent: number;
    getTime(): number;
    setTime(time: number): void;
    isDay(time?: number): boolean;
    isNight(time?: number): boolean;
    isPast(checkTime: string, currentTime?: number): boolean | undefined;
    isBefore(checkTime: string, currentTime?: number): boolean | undefined;
    isBetween(checkPast: string, checkBefore: string, currentTime?: number): boolean | undefined;
    getHourMinute(time?: number): {
        hour: number;
        minute: number;
    };
    getHour(time?: number, format?: TimeFormat): number;
    getMinute(time?: number): number;
    getTimeFormat(time?: number, format?: TimeFormat): string;
    getBrightness(time?: number): number;
    private realignTime(time);
}
