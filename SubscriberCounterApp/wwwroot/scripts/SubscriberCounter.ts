//[2] 구독자 수 관리에 필요한 기능
/*export*/ class SubscriberCounter {
    // 필드
    private _count = 7000;
    // 생성자
    constructor(public title: string) {
    }
    // 속성
    get count() {
        return this._count;
    }
    set count(value: number) {
        this._count = value;
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