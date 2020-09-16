//console.log("구독자 수 관리 앱");
//[1] HTML 페이지의 특정 div 태그에 HTML 출력
export class HtmlResponse {
    private constructor() {
        // Empty
    }
    static divHtml: HTMLDivElement;
    static write(html: string) {
        HtmlResponse.divHtml.innerHTML = html; 
    }
}
//[2] 구독자 수 관리에 필요한 기능
export class SubscriberCounter {
    // 필드
    private _count = 0; 
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

}
const root = new Root();
