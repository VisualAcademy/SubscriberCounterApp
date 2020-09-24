/// <reference path="CounterType.ts" />

//[2] 구독자 수 관리에 필요한 기능의 부모 클래스
abstract class SubscriberCounter {
    // 필드
    private _count = 7000;
    id: number;
    title: string;
    abstract counterType: CounterType; 
    abstract getCounterInfo(): any; 
    // 생성자
    constructor(counterSettings: any) {
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
    increment(cnt: number) {
        this._count += cnt;
    }
    decrement(cnt: number) {
        this._count -= cnt;
    }
    update(cnt: number) {
        this._count = cnt;
    }
}