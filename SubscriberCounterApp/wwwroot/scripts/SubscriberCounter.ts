/// <reference path="CounterType.ts" />
/// <reference path="_Models.ts" />
import { CounterType } from "./CounterType";
import { ICounterBase, ICounterInfo, ICounterSettings } from "./_Models";

//[2] 구독자 수 관리에 필요한 기능의 부모 클래스
export abstract class SubscriberCounter implements ICounterBase {
    // 필드
    //_count = 7000;
    private _count = 7000;
    id: number;
    title: string;
    abstract counterType: CounterType; 
    //abstract getCounterInfo(): any; 
    abstract getCounterInfo(): ICounterInfo<number, string>; 
    // 생성자
    constructor(counterSettings: ICounterSettings) {
        this.id = counterSettings.id;
        this.title = counterSettings.title; 
        this._count = counterSettings.count;
    }
    // 속성
    get count() {
        return this._count;
    }
    set count(value: number) {
        if (value >= 0) {
            this._count = value;
        }
        else {
            throw Error("구독자 수는 음수일 수 없습니다.");
        }
    }
    // 메서드
    increment(cnt: number): void {
        this._count += cnt;
    }
    decrement(cnt: number): void {
        this._count -= cnt;
    }
    update(cnt: number): void {
        this._count = cnt;
    }
}
