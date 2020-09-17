//console.log("구독자 수 관리 앱");
//[1] HTML 페이지의 특정 div 태그에 HTML 출력
/*export */class HtmlResponse {
    private constructor() {
        // Empty
    }
    static divHtml: HTMLDivElement;
    static write(html: string) {
        HtmlResponse.divHtml.innerHTML = html; 
    }
}
//[2] 구독자 수 관리에 필요한 기능
/*export */class SubscriberCounter {
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
//[!] 실행
class Root {
    private title: string = "Youtube";
    subscriberCounter: SubscriberCounter;
    constructor() {
        this.subscriberCounter = new SubscriberCounter(this.title);
        this.renderCounter(); 
    }
    renderCounter() {
        const html = `
<h2>${this.title} 구독자 카운트</h2>
<span>채널 이름: </span> ${this.subscriberCounter.title}<br /> 
<span>구독자 수: </span> ${this.subscriberCounter.count}<hr /> 
변경 값: <input type="text" id="txtAmount" value="0"> 
<button onclick="window.root.changeCounter(+1)">증가</button>
<button onclick="window.root.changeCounter(-1)">감소</button>
<button onclick="window.root.changeCounter(0)">수정</button>
`;
        HtmlResponse.write(html);
    }
    changeCounter(changeType: ChangeType) {
        let txtAmount: HTMLInputElement = document.querySelector("#txtAmount");
        let amount = +txtAmount.value;
        if (changeType == ChangeType.Increment) {
            this.subscriberCounter.increment(amount); 
        }
        else if (changeType == ChangeType.Decrement) {
            this.subscriberCounter.decrement(amount); 
        }
        else {
            this.subscriberCounter.update(amount); 
        }
        this.renderCounter(); 
    }
}
enum ChangeType { Increment = 1, Update = 0, Decrement = -1 }
HtmlResponse.divHtml = document.querySelector("#divHtml");
const root = new Root(); // 자바스크립트 코드 실행
(<any>window).root = root; 