//[1] HTML 페이지의 특정 div 태그에 HTML 출력
export class HtmlResponse {
    constructor() {
        // Empty
    }
    static write(html) {
        if (HtmlResponse) {
        }
        if (HtmlResponse.divHtml !== null) {
            HtmlResponse.divHtml.innerHTML = html;
        }
    }
}
