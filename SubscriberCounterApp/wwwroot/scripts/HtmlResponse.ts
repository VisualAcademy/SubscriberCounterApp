//[1] HTML 페이지의 특정 div 태그에 HTML 출력
export class HtmlResponse {
    private constructor() {
        // Empty
    }
    static divHtml: HTMLDivElement | null;
    static write(html: string) {
        if (HtmlResponse) {

        }
        if (HtmlResponse.divHtml !== null) {
            HtmlResponse.divHtml.innerHTML = html;
        }
    }
}
