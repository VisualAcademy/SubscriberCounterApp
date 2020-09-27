//[1] HTML 페이지의 특정 div 태그에 HTML 출력
export class HtmlWriter {
    constructor(private divHtml: HTMLDivElement | null) {
        if (this.divHtml !== null) {
            this.divHtml.innerHTML = "<h2>구독자 카운터 앱</h2>";
        }
    }
    write(html: string) {
        if (this.divHtml !== null) {
            this.divHtml.innerHTML = html;
        }
    }
    writeLog(html: string) {
        if (this.divHtml !== null) {
            this.divHtml.innerHTML += `<hr />${html}`;
        }
    }
}
