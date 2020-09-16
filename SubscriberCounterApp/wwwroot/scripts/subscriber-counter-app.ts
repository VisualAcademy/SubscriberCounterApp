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
}
//[!] 실행
class Root {
    private title: string = "Youtube";
    subscriberCounter: SubscriberCounter;
    constructor() {
        this.subscriberCounter = new SubscriberCounter(this.title);
        this.rederCounter(); 
    }
    rederCounter() {
        const html = `
<h2>${this.title} 구독자 카운트</h2>
<span>채널 이름: </span> ${this.subscriberCounter.title}<br /> 
<span>구독자 수: </span> ${this.subscriberCounter.count}<br /> 
`;
        HtmlResponse.write(html);
    }
}
HtmlResponse.divHtml = document.querySelector("#divHtml");
const root = new Root(); // 자바스크립트 코드 실행
