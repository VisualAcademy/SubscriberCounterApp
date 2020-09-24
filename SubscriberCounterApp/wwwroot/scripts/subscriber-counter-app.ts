﻿//console.log("구독자 수 관리 앱");

// 삼중 슬래시 참조, 삼중 슬래시 지시문
/// <reference path="ChangeType.ts" />
/// <reference path="HtmlResponse.ts" />
/// <reference path="SubscriberCounter.ts" />
/// <reference path="HtmlWriter.ts" />
/// <reference path="BlogCounter.ts" />
/// <reference path="YoutubeCounter.ts" />
/// <reference path="CounterType.ts" />
/// <reference path="CounterList.ts" />

//import { ChangeType } from './ChangeType';
//import { HtmlResponse } from './HtmlResponse';

//[!] 실행
class Root {
    private title: string = "Youtube";
    //subscriberCounter: SubscriberCounter;
    youtubeCounter: YoutubeCounter;
    blogCounter: BlogCounter; 
    constructor(private writer: HtmlWriter) {
        this.youtubeCounter = new YoutubeCounter({
            id: 1,
            title: '유튜브 카운터',
            count: 10000
        });
        this.blogCounter = new BlogCounter({
            id: 2,
            title: '블로그 카운터',
            count: 40000
        });

        let html: string = "";
        const counterList = new CounterList();
        counterList.add(this.youtubeCounter);
        counterList.add(this.blogCounter);
        counterList.getAll().forEach((cl, idx) => {
            html += `${cl.id} - ${cl.title}<br />`;
        });

        this.writer.write(html); 
    }
    renderCounter() {
//        const html = `
//<h2>${this.title} 구독자 카운트</h2>
//<span>채널 이름: </span> ${this.subscriberCounter.title}<br /> 
//<span>구독자 수: </span> ${this.subscriberCounter.count}<hr /> 
//변경 값: <input type="text" id="txtAmount" value="0"> 
//<button onclick="window.root.changeCounter(+1)">증가</button>
//<button onclick="window.root.changeCounter(-1)">감소</button>
//<button onclick="window.root.changeCounter(0)">수정</button>
//`;
//        //HtmlResponse.write(html);
//        writer.write(html); 
    }
    changeCounter(changeType: ChangeType) {
        //let txtAmount: HTMLInputElement | null = document.querySelector("#txtAmount");
        //let amount = 0;
        //if (txtAmount !== null) {
        //    amount = +txtAmount.value;
        //}
        //if (changeType == ChangeType.Increment) {
        //    this.subscriberCounter.increment(amount); 
        //}
        //else if (changeType == ChangeType.Decrement) {
        //    this.subscriberCounter.decrement(amount); 
        //}
        //else {
        //    this.subscriberCounter.update(amount); 
        //}
        //this.renderCounter(); 
    }
}

let divHtml: HTMLDivElement | null = document.querySelector("#divHtml");
const writer: HtmlWriter = new HtmlWriter(divHtml);
const root = new Root(writer); // 자바스크립트 코드 실행
(<any>window).root = root; 
