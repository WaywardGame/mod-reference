export default class TimeManager {
    dayLength: number;
    transitionPercent: number;
    dayStart: number;
    private _turns;
    private _dayPercent;
    constructor(turns: number);
    readonly turns: number;
    nextTurn(): void;
    dayPercent: number;
    nightPercent: number;
    getTime(): number;
    setTime(time: number): void;
    isDay(time?: number): boolean;
    isNight(time?: number): boolean;
    getBrightness(time?: number): number;
}
