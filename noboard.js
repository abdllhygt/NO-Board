document.addEventListener("DOMContentLoaded", function(event) {
  var btnTr = document.getElementById("btnTr");
  btnTr.onclick = function(){
    tr();
  }
  var btnEo = document.getElementById("btnEo");
  btnEo.onclick = function(){
    eo();
  }
  var btnAr = document.getElementById("btnAr");
  btnAr.onclick = function(){
    ar();
  }
  var btnJp = document.getElementById("btnJp");
  btnJp.onclick = function(){
    jp();
  }
});

function tr(){
  $("input").keyup(function (evt) {
      this.value = this.value.replace("&", "");
      this.value = this.value.replace(/Ax/g, "Â");
      this.value = this.value.replace(/Ix/g, "İ");
      this.value = this.value.replace(/Ux/g, "Ü");
      this.value = this.value.replace(/Ox/g, "Ö");
      this.value = this.value.replace(/Gx/g, "Ğ");
      this.value = this.value.replace(/Gh/g, "Ğ");
      this.value = this.value.replace(/Sx/g, "Ş");
      this.value = this.value.replace(/Sh/g, "Ş");
      this.value = this.value.replace(/Cx/g, "Ç");
      this.value = this.value.replace(/Ch/g, "Ç");

      this.value = this.value.replace(/ax/g, "â");
      this.value = this.value.replace(/ae/g, "â");
      this.value = this.value.replace(/ix/g, "ı");
      this.value = this.value.replace(/ie/g, "ı");
      this.value = this.value.replace(/ux/g, "ü");
      this.value = this.value.replace(/ue/g, "ü");
      this.value = this.value.replace(/ox/g, "ö");
      this.value = this.value.replace(/oe/g, "ö");
      this.value = this.value.replace(/gx/g, "ğ");
      this.value = this.value.replace(/gh/g, "ğ");
      this.value = this.value.replace(/sx/g, "ş");
      this.value = this.value.replace(/sh/g, "ş");
      this.value = this.value.replace(/cx/g, "ç");
      this.value = this.value.replace(/ch/g, "ç");
  });
}

function eo(){
  $("input").keyup(function (evt) {
      this.value = this.value.replace("^", "");
      this.value = this.value.replace(/Hx/g, "Ĥ");
      this.value = this.value.replace(/Cx/g, "Ĉ");
      this.value = this.value.replace(/Ç/g, "Ĉ");
      this.value = this.value.replace(/Ux/g, "Ŭ");
      this.value = this.value.replace(/Ü/g, "Ŭ");
      this.value = this.value.replace(/Jx/g, "Ĵ");
      this.value = this.value.replace(/Gx/g, "Ĝ");
      this.value = this.value.replace(/Ğ/g, "Ĝ");
      this.value = this.value.replace(/Sx/g, "Ŝ");
      this.value = this.value.replace(/Ş/g, "Ŝ");

      this.value = this.value.replace(/hx/g, "ĥ");
      this.value = this.value.replace(/cx/g, "ĉ");
      this.value = this.value.replace(/ç/g, "ĉ");
      this.value = this.value.replace(/ux/g, "ŭ");
      this.value = this.value.replace(/ü/g, "ŭ");
      this.value = this.value.replace(/jx/g, "ĵ");
      this.value = this.value.replace(/gx/g, "ĝ");
      this.value = this.value.replace(/ğ/g, "ĝ");
      this.value = this.value.replace(/sx/g, "ŝ");
      this.value = this.value.replace(/ş/g, "ŝ");
  });
}

function ar(){
  $("input[type=text]").keypress(function (evt) {
      this.value = this.value.replace(/E/g, "أ");
      this.value = this.value.replace(/e/g, "ا");

      this.value = this.value.replace(/b/g, "ب");
      this.value = this.value.replace(/t/g, "ت");
      this.value = this.value.replace(/ts/g, "ث");

      this.value = this.value.replace(/c/g, "ج");
      this.value = this.value.replace(/j/g, "ج");
      this.value = this.value.replace(/h/g, "ح");
      this.value = this.value.replace(/x/g, "خ");

      this.value = this.value.replace(/d/g, "د");
      this.value = this.value.replace(/Z/g, "ذ");
      this.value = this.value.replace(/r/g, "ر");
      this.value = this.value.replace(/z/g, "ز");

      this.value = this.value.replace(/s/g, "س");
      this.value = this.value.replace(/ş/g, "ش");
      this.value = this.value.replace(/sh/g, "ش");
      this.value = this.value.replace(/S/g, "ص");
      this.value = this.value.replace(/D/g, "ض");
      this.value = this.value.replace(/T/g, "ط");
      this.value = this.value.replace(/Z/g, "ظ");

      this.value = this.value.replace(/a/g, "ع");
      this.value = this.value.replace(/G/g, "غ");
      this.value = this.value.replace(/ğ/g, "غ");

      this.value = this.value.replace(/f/g, "ف");
      this.value = this.value.replace(/K/g, "ق");
      this.value = this.value.replace(/g/g, "ق");
      this.value = this.value.replace(/k/g, "ك");

      this.value = this.value.replace(/L/g, "ل");
      this.value = this.value.replace(/m/g, "م");
      this.value = this.value.replace(/n/g, "ن");

      this.value = this.value.replace(/v/g, "و");
      this.value = this.value.replace(/u/g, "و");
      this.value = this.value.replace(/y/g, "ي");
      this.value = this.value.replace(/i/g, "ي");
  });

}

function jp(){
  $("input[type=text]").keypress(function (evt) {
      this.value = this.value.replace(/ka/g, "か");
      this.value = this.value.replace(/sa/g, "さ");
      this.value = this.value.replace(/ta/g, "た");
      this.value = this.value.replace(/na/g, "な");
      this.value = this.value.replace(/ha/g, "は");
      this.value = this.value.replace(/ma/g, "ま");
      this.value = this.value.replace(/ya/g, "や");
      this.value = this.value.replace(/ra/g, "ら");
      this.value = this.value.replace(/wa/g, "わ");

      this.value = this.value.replace(/ki/g, "き");
      this.value = this.value.replace(/shi/g, "し");
      this.value = this.value.replace(/şi/g, "し");
      this.value = this.value.replace(/chi/g, "ち");
      this.value = this.value.replace(/çi/g, "ち");
      this.value = this.value.replace(/ni/g, "に");
      this.value = this.value.replace(/hi/g, "ひ");
      this.value = this.value.replace(/mi/g, "み");
      this.value = this.value.replace(/ri/g, "り");
      this.value = this.value.replace(/wi/g, "ゐ");

      this.value = this.value.replace(/ku/g, "く");
      this.value = this.value.replace(/su/g, "す");
      this.value = this.value.replace(/tsu/g, "つ");
      this.value = this.value.replace(/nu/g, "ぬ");
      this.value = this.value.replace(/fu/g, "ふ");
      this.value = this.value.replace(/mu/g, "む");
      this.value = this.value.replace(/yu/g, "ゆ");
      this.value = this.value.replace(/ru/g, "る");

      this.value = this.value.replace(/ke/g, "け");
      this.value = this.value.replace(/se/g, "せ");
      this.value = this.value.replace(/te/g, "て");
      this.value = this.value.replace(/ne/g, "ね");
      this.value = this.value.replace(/he/g, "へ");
      this.value = this.value.replace(/me/g, "め");
      this.value = this.value.replace(/re/g, "れ");
      this.value = this.value.replace(/we/g, "ゑ");

      this.value = this.value.replace(/ko/g, "こ");
      this.value = this.value.replace(/so/g, "そ");
      this.value = this.value.replace(/to/g, "と");
      this.value = this.value.replace(/no/g, "の");
      this.value = this.value.replace(/ho/g, "ほ");
      this.value = this.value.replace(/mo/g, "も");
      this.value = this.value.replace(/yo/g, "よ");
      this.value = this.value.replace(/ro/g, "ろ");
      this.value = this.value.replace(/wo/g, "を");

      this.value = this.value.replace(/kya/g, "きゃ");
      this.value = this.value.replace(/sha/g, "しゃ");
      this.value = this.value.replace(/cha/g, "ちゃ");
      this.value = this.value.replace(/nya/g, "にゃ");
      this.value = this.value.replace(/hya/g, "ひゃ");
      this.value = this.value.replace(/mya/g, "みゃ");
      this.value = this.value.replace(/rya/g, "りゃ");

      this.value = this.value.replace(/kyu/g, "きゅ");
      this.value = this.value.replace(/shu/g, "しゅ");
      this.value = this.value.replace(/chu/g, "ちゅ");
      this.value = this.value.replace(/nyu/g, "にゅ");
      this.value = this.value.replace(/hyu/g, "ひゅ");
      this.value = this.value.replace(/myu/g, "みゅ");
      this.value = this.value.replace(/ryu/g, "りゅ");

      this.value = this.value.replace(/kyo/g, "きょ");
      this.value = this.value.replace(/sho/g, "しょ");
      this.value = this.value.replace(/cho/g, "ちょ");
      this.value = this.value.replace(/nyo/g, "にょ");
      this.value = this.value.replace(/hyo/g, "ひょ");
      this.value = this.value.replace(/myo/g, "みょ");
      this.value = this.value.replace(/ryo/g, "りょ");

      this.value = this.value.replace(/ga/g, "が");
      this.value = this.value.replace(/za/g, "ざ");
      this.value = this.value.replace(/da/g, "だ");
      this.value = this.value.replace(/ba/g, "ば");
      this.value = this.value.replace(/pa/g, "ぱ");

      this.value = this.value.replace(/gi/g, "ぎ");
      this.value = this.value.replace(/zi/g, "じ");
      this.value = this.value.replace(/ji/g, "ぢ");
      this.value = this.value.replace(/dji/g, "ぢ");
      this.value = this.value.replace(/jyi/g, "ぢ");
      this.value = this.value.replace(/bi/g, "び");
      this.value = this.value.replace(/pi/g, "ぴ");

      this.value = this.value.replace(/gu/g, "ぐ");
      this.value = this.value.replace(/zu/g, "ず");
      this.value = this.value.replace(/du/g, "づ");
      this.value = this.value.replace(/dzu/g, "づ");
      this.value = this.value.replace(/bu/g, "ぶ");
      this.value = this.value.replace(/pu/g, "ぷ");

      this.value = this.value.replace(/ge/g, "げ");
      this.value = this.value.replace(/ze/g, "ぜ");
      this.value = this.value.replace(/de/g, "で");
      this.value = this.value.replace(/be/g, "べ");
      this.value = this.value.replace(/pe/g, "ぺ");

      this.value = this.value.replace(/go/g, "ご");
      this.value = this.value.replace(/zo/g, "ぞ");
      this.value = this.value.replace(/do/g, "ど");
      this.value = this.value.replace(/bo/g, "ぼ");
      this.value = this.value.replace(/po/g, "ぽ");

      this.value = this.value.replace(/gya/g, "ぎゃ");
      this.value = this.value.replace(/ja/g, "じゃ");
      this.value = this.value.replace(/ja2/g, "ぢゃ");
      this.value = this.value.replace(/bya/g, "びゃ");
      this.value = this.value.replace(/pya/g, "ぴゃ");

      this.value = this.value.replace(/gyu/g, "ぎゅ");
      this.value = this.value.replace(/ju/g, "じゅ");
      this.value = this.value.replace(/ju2/g, "ぢゅ");
      this.value = this.value.replace(/byu/g, "びゅ");
      this.value = this.value.replace(/pyu/g, "ぴゅ");

      this.value = this.value.replace(/gyo/g, "ぎょ");
      this.value = this.value.replace(/jo/g, "じょ");
      this.value = this.value.replace(/jo2/g, "ぢょ");
      this.value = this.value.replace(/byo/g, "びょ");
      this.value = this.value.replace(/pyo/g, "ぴょ");

      this.value = this.value.replace(/n/g, "ん");
      this.value = this.value.replace(/x/g, "ゝ");
      this.value = this.value.replace(/x2/g, "ゞ");
      this.value = this.value.replace(/a/g, "あ");
      this.value = this.value.replace(/i/g, "い");
      this.value = this.value.replace(/u/g, "う");
      this.value = this.value.replace(/e/g, "え");
      this.value = this.value.replace(/o/g, "お");
      this.value = this.value.replace(".", "。");
      this.value = this.value.replace(",", "、");


      this.value = this.value.replace(/KA/g, "カ");
      this.value = this.value.replace(/GA/g, "ガ");
      this.value = this.value.replace(/SA/g, "サ");
      this.value = this.value.replace(/ZA/g, "ザ");
      this.value = this.value.replace(/TA/g, "タ");
      this.value = this.value.replace(/DA/g, "ダ");
      this.value = this.value.replace(/NA/g, "ナ");
      this.value = this.value.replace(/HA/g, "ハ");
      this.value = this.value.replace(/BA/g, "バ	");
      this.value = this.value.replace(/PA/g, "パ");
      this.value = this.value.replace(/MA/g, "マ");
      this.value = this.value.replace(/YA/g, "ヤ");
      this.value = this.value.replace(/RA/g, "ラ");
      this.value = this.value.replace(/WA/g, "ワ");

      this.value = this.value.replace(/KI/g, "キ");
      this.value = this.value.replace(/GI/g, "ギ");
      this.value = this.value.replace(/SI/g, "シ");
      this.value = this.value.replace(/ZI/g, "ジ");
      this.value = this.value.replace(/TI/g, "チ");
      this.value = this.value.replace(/DI/g, "ヂ");
      this.value = this.value.replace(/NI/g, "ニ");
      this.value = this.value.replace(/HI/g, "ヒ");
      this.value = this.value.replace(/BI/g, "ビ");
      this.value = this.value.replace(/PI/g, "ピ");
      this.value = this.value.replace(/MI/g, "ミ");
      this.value = this.value.replace(/RI/g, "リ");
      this.value = this.value.replace(/WI/g, "ヰ");

      this.value = this.value.replace(/KU/g, "ク");
      this.value = this.value.replace(/GU/g, "グ");
      this.value = this.value.replace(/SU/g, "ス");
      this.value = this.value.replace(/ZU/g, "ズ");
      this.value = this.value.replace(/TU/g, "ツ");
      this.value = this.value.replace(/DU/g, "ヅ");
      this.value = this.value.replace(/NU/g, "ヌ");
      this.value = this.value.replace(/HU/g, "フ");
      this.value = this.value.replace(/BU/g, "ブ");
      this.value = this.value.replace(/PU/g, "プ");
      this.value = this.value.replace(/MU/g, "ム");
      this.value = this.value.replace(/YU/g, "ユ");
      this.value = this.value.replace(/RU/g, "ル");

      this.value = this.value.replace(/KE/g, "ケ");
      this.value = this.value.replace(/GE/g, "ゲ");
      this.value = this.value.replace(/SE/g, "セ");
      this.value = this.value.replace(/ZE/g, "ゼ");
      this.value = this.value.replace(/TE/g, "テ");
      this.value = this.value.replace(/DE/g, "デ");
      this.value = this.value.replace(/NE/g, "ネ");
      this.value = this.value.replace(/HE/g, "ヘ");
      this.value = this.value.replace(/BE/g, "ベ");
      this.value = this.value.replace(/PE/g, "ペ");
      this.value = this.value.replace(/ME/g, "メ");
      this.value = this.value.replace(/RE/g, "レ");
      this.value = this.value.replace(/WE/g, "ヱ");

      this.value = this.value.replace(/KO/g, "コ");
      this.value = this.value.replace(/GO/g, "ゴ");
      this.value = this.value.replace(/SO/g, "ソ");
      this.value = this.value.replace(/ZO/g, "ゾ");
      this.value = this.value.replace(/TO/g, "ト");
      this.value = this.value.replace(/DO/g, "ド");
      this.value = this.value.replace(/NO/g, "ノ");
      this.value = this.value.replace(/HO/g, "ホ");
      this.value = this.value.replace(/BO/g, "ボ");
      this.value = this.value.replace(/PO/g, "ポ");
      this.value = this.value.replace(/MO/g, "モ");
      this.value = this.value.replace(/YO/g, "ヨ");
      this.value = this.value.replace(/RO/g, "ロ");
      this.value = this.value.replace(/WO/g, "ヲ");

      this.value = this.value.replace(/A/g, "ア");
      this.value = this.value.replace(/I/g, "イ");
      this.value = this.value.replace(/U/g, "ウ");
      this.value = this.value.replace(/E/g, "エ");
      this.value = this.value.replace(/O/g, "オ");
      this.value = this.value.replace(/N/g, "ン");
      this.value = this.value.replace(/-/g, "ー");
  });
}
