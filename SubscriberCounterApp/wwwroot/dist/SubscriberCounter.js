//[2] 구독자 수 관리에 필요한 기능의 부모 클래스
export class SubscriberCounter {
    // 생성자
    constructor(counterSettings) {
        // 필드
        //_count = 7000;
        this._count = 7000;
        this.id = counterSettings.id;
        this.title = counterSettings.title;
        this._count = counterSettings.count;
    }
    // 속성
    get count() {
        return this._count;
    }
    set count(value) {
        if (value >= 0) {
            this._count = value;
        }
        else {
            throw Error("구독자 수는 음수일 수 없습니다.");
        }
    }
    // 메서드
    increment(cnt) {
        this._count += cnt;
    }
    decrement(cnt) {
        this._count -= cnt;
    }
    update(cnt) {
        this._count = cnt;
    }
}
