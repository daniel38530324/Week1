import React from "react";
import Picture from "../pictures/one.jpg";
import Picture2 from "../pictures/two.jpeg";

const Homepage = () => {
  return (
    <div class="body">
      <main>
        <section class="up">
          <img src={Picture} alt="封面" />
          <h1 class="two" id="go">
            台北最美的風景
          </h1>
          <a href="/">開始導覽</a>
        </section>
        <section class="down">
          <div class="left">
            <h1 class="blue">導覽</h1>
            <p>
              台北101是位於臺灣臺北市信義區的摩天大樓，樓高510公尺，地上101層、地下5層，自落成以來即成為台北重要地標與觀光景點之一。台北101是台灣第一高樓、以及唯一樓層超過100層的建築物，曾於2004年12月1日至2010年1月7日間擁有世界第一高樓的紀錄。目前為世界第十一高樓，也是數一數二高的綠建築。大樓內擁有全球第二大、全球唯二開放給遊客觀賞的巨型阻尼器。標高460公尺的101樓上方之觀景台為全球最高的戶外屋頂觀景步道。
            </p>
            <p>
              台北101座落於臺北市的中心商業區——信義計畫區，最初是為了配合臺灣政府的亞太營運中心政策而籌建的金融服務設施，後轉變成綜合性的商辦建築。原本計畫興建5棟建築，後來改為合併成一座摩天大廈，建築高度最終則提升至509.2公尺，以成為當時之世界第一高樓為目標。
            </p>
            <p>
              台北101的地上樓層有101樓，若包括頂部塔尖內不開放遊客參觀的5層樓則有106樓，地下尚有5層樓。根據CTBUH的4項分類建築物高度判斷法，台北101啟用時在其中3項標準中皆為全世界最高的摩天大樓。
            </p>
          </div>
          <div class="right">
            <img src={Picture2} alt="101照片" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
