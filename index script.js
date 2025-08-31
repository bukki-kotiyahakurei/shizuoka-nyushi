document.addEventListener('DOMContentLoaded', () => {
    // 必要なイベントリスナーをここに記述
    document.querySelector('select[name="nendo"]').addEventListener('change', function() {
        const selectedYear = this.value;
        const updatedDeviationValues = updateDeviationValues(selectedYear);

        if (updatedDeviationValues) {
            deviationValues.kokugo.mean = updatedDeviationValues.kokugo_avg;
            deviationValues.kokugo.sd = updatedDeviationValues.kokugo_sd;
            deviationValues.sugaku.mean = updatedDeviationValues.sugaku_avg;
            deviationValues.sugaku.sd = updatedDeviationValues.sugaku_sd;
            deviationValues.eigo.mean = updatedDeviationValues.eigo_avg;
            deviationValues.eigo.sd = updatedDeviationValues.eigo_sd;
            deviationValues.shakai.mean = updatedDeviationValues.shakai_avg;
            deviationValues.shakai.sd = updatedDeviationValues.shakai_sd;
            deviationValues.rika.mean = updatedDeviationValues.rika_avg;
            deviationValues.rika.sd = updatedDeviationValues.rika_sd;

            console.log(`update year: ${selectedYear}`);
        } else {
            console.warn('has not update years data!');
        }
    });
});


// IEを使用時に警告
const userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf("msie") > -1 || userAgent.indexOf("trident/") > -1) {
    alert("このサイトは Internet Explorer に対応していません。\nまた、Internet Explorerはサポートが終了しています。速やかにサポート継続中のブラウザへ移行しましょう。");
} else {
    console.log("Access is succesfull! This browser is either in support or unknown browser.");
}

// 偏差値の初期化 (デフォルトで令和6年のデータを使用)
// 追加方法➔deviationValuesには最新年度
const deviationValues = {
    kokugo: { mean: 35.05, sd: 7.34 },
    sugaku: { mean: 24.36, sd: 7.45 },
    eigo: { mean: 31.71, sd: 11.51 },
    shakai: { mean: 27.94, sd: 9.22 },
    rika: { mean: 27.60, sd: 9.58 },
};

// 追加方法➔R'x'と囲み、_avgは各教科のそれぞれの平均、_sdは標準偏差にしてください。
    const yearData = {
R7: {
    kokugo_avg: 35.05, kokugo_sd: 7.34,
    sugaku_avg: 24.36, sugaku_sd: 7.45,
    eigo_avg: 31.71, eigo_sd: 11.51,
    shakai_avg: 27.94, shakai_sd: 9.22,
    rika_avg: 27.60, rika_sd: 9.58
},
R6: {
    kokugo_avg: 33.81, kokugo_sd: 7.26,
    sugaku_avg: 24.16, sugaku_sd: 8.88,
    eigo_avg: 30.26, eigo_sd: 10.96,
    shakai_avg: 27.19, shakai_sd: 9.91,
    rika_avg: 25.64, rika_sd: 10.88
},
R5: {
    kokugo_avg: 33.55, kokugo_sd: 7.63,
    sugaku_avg: 26.15, sugaku_sd: 8.89,
    eigo_avg: 27.25, eigo_sd: 11.33,
    shakai_avg: 30.33, shakai_sd: 9.30,
    rika_avg: 25.64, rika_sd: 9.73
},
R4: {
    kokugo_avg: 34.90, kokugo_sd: 7.26,
    sugaku_avg: 24.64, sugaku_sd: 9.44,
    eigo_avg: 31.92, eigo_sd: 11.16,
    shakai_avg: 29.41, shakai_sd: 9.79,
    rika_avg: 26.98, rika_sd: 9.90
},
R3: {
    kokugo_avg: 31.81, kokugo_sd: 7.19,
    sugaku_avg: 22.39, sugaku_sd: 8.54,
    eigo_avg: 26.85, eigo_sd: 9.56,
    shakai_avg: 30.47, shakai_sd: 9.44,
    rika_avg: 27.53, rika_sd: 9.99
},
R2: {
    kokugo_avg: 33.66, kokugo_sd: 7.34,
    sugaku_avg: 25.39, sugaku_sd: 9.07,
    eigo_avg: 27.47, eigo_sd: 10.68,
    shakai_avg: 30.67, shakai_sd: 8.92,
    rika_avg: 28.41, rika_sd: 9.07
},
H31: {
    kokugo_avg: 34.4, kokugo_sd: 6.11,
    sugaku_avg: 26.71, sugaku_sd: 10.47,
    eigo_avg: 26.59, eigo_sd: 9.96,
    shakai_avg: 27.76, shakai_sd: 9.28,
    rika_avg: 26.66, rika_sd: 9.35
},
H30: {
    kokugo_avg: 30.7, kokugo_sd: 7.83,
    sugaku_avg: 22.71, sugaku_sd: 9.04,
    eigo_avg: 26.39, eigo_sd: 11.23,
    shakai_avg: 24.20, shakai_sd: 7.96,
    rika_avg: 22.52, rika_sd: 8.53
},
H29: {
    kokugo_avg: 30.46, kokugo_sd: 6.76,
    sugaku_avg: 23.44, sugaku_sd: 8.21,
    eigo_avg: 25.88, eigo_sd: 9.67,
    shakai_avg: 25.13, shakai_sd: 8.05,
    rika_avg: 17.35, rika_sd: 7.73
},
H28: {
    kokugo_avg: 29.65, kokugo_sd: 7.34,
    sugaku_avg: 22.84, sugaku_sd: 8.07,
    eigo_avg: 27.98, eigo_sd: 10.84,
    shakai_avg: 31.79, shakai_sd: 9.43,
    rika_avg: 19.79, rika_sd: 8.52
},
H27: {
    kokugo_avg: 32.94, kokugo_sd: 6.68,
    sugaku_avg: 23.57, sugaku_sd: 9.24,
    eigo_avg: 29.68, eigo_sd: 10.82,
    shakai_avg: 30.90, shakai_sd: 9.07,
    rika_avg: 28.68, rika_sd: 10.22
},
H26: {
    kokugo_avg: 29.53, kokugo_sd: 6.60,
    sugaku_avg: 26.38, sugaku_sd: 10.53,
    eigo_avg: 26.48, eigo_sd: 10.56,
    shakai_avg: 32.27, shakai_sd: 9.38,
    rika_avg: 27.59, rika_sd: 8.79
},
H25: {
    kokugo_avg: 30.83, kokugo_sd: 7.09,
    sugaku_avg: 21.55, sugaku_sd: 9.13,
    eigo_avg: 28.03, eigo_sd: 10.62,
    shakai_avg: 32.58, shakai_sd: 9.14,
    rika_avg: 28.69, rika_sd: 9.34
},
H24: {
    kokugo_avg: 31.4, kokugo_sd: 7.09,
    sugaku_avg: 25.0, sugaku_sd: 9.13,
    eigo_avg: 26.3, eigo_sd: 10.62,
    shakai_avg: 28.1, shakai_sd: 9.14,
    rika_avg: 24.1, rika_sd: 9.34
},
H23: {
    kokugo_avg: 33.7, kokugo_sd: 7.09,
    sugaku_avg: 21.4, sugaku_sd: 9.13,
    eigo_avg: 25.2, eigo_sd: 10.62,
    shakai_avg: 26.4, shakai_sd: 9.14,
    rika_avg: 24.8, rika_sd: 9.34
},
H22: {
    kokugo_avg: 32.1, kokugo_sd: 7.09,
    sugaku_avg: 22.1, sugaku_sd: 9.13,
    eigo_avg: 25.9, eigo_sd: 10.62,
    shakai_avg: 27.3, shakai_sd: 9.14,
    rika_avg: 26.6, rika_sd: 9.34
},
H21: {
    kokugo_avg: 30.1, kokugo_sd: 7.09,
    sugaku_avg: 26.6, sugaku_sd: 9.13,
    eigo_avg: 23.8, eigo_sd: 10.62,
    shakai_avg: 26.1, shakai_sd: 9.14,
    rika_avg: 30.6, rika_sd: 9.34
},
};
 //以下のプログラムは絶対変更しないようお願いいたします。（リニューアル時も）
 // 年度が変更されたときに対応するデータを取得する関数
 function updateDeviationValues(year) {
    return yearData[year];
}

// 年度変更時に偏差値データを更新するリスナー
document.querySelector('select[name="nendo"]').addEventListener('change', function() {
    const selectedYear = this.value; // 選択された年度の値を取得
    const updatedDeviationValues = updateDeviationValues(selectedYear); // 選択された年度のデータを取得

    if (updatedDeviationValues) {
        // 各教科の平均値と標準偏差を更新
        deviationValues.kokugo.mean = updatedDeviationValues.kokugo_avg;
        deviationValues.kokugo.sd = updatedDeviationValues.kokugo_sd;
        deviationValues.sugaku.mean = updatedDeviationValues.sugaku_avg;
        deviationValues.sugaku.sd = updatedDeviationValues.sugaku_sd;
        deviationValues.eigo.mean = updatedDeviationValues.eigo_avg;
        deviationValues.eigo.sd = updatedDeviationValues.eigo_sd;
        deviationValues.shakai.mean = updatedDeviationValues.shakai_avg;
        deviationValues.shakai.sd = updatedDeviationValues.shakai_sd;
        deviationValues.rika.mean = updatedDeviationValues.rika_avg;
        deviationValues.rika.sd = updatedDeviationValues.rika_sd;

        console.log(`年度データを更新しました: ${selectedYear}`);
    } else {
        console.warn('更新対象の年度データが見つかりません。');
    }
});


// 偏差値計算関数
function calculate() {
    const kokugo = parseFloat(document.getElementById('kokugo').value) || 0;
    const sugaku = parseFloat(document.getElementById('sugaku').value) || 0;
    const eigo = parseFloat(document.getElementById('eigo').value) || 0;
    const shakai = parseFloat(document.getElementById('shakai').value) || 0;
    const rika = parseFloat(document.getElementById('rika').value) || 0;
    console.log("Start to Calc");

    function calculateDeviation(score, mean, sd) {
        if (sd === 0) {
            return 50; // 標準偏差が0の場合は偏差値50を返す
        }
        return ((score - mean) / sd) * 10 + 50;
    }

    function roundToOneDecimal(value) {
        return Math.floor(value * 100) / 100;
    }
    // 各教科の偏差値計算
    const kokugoDeviation = roundToOneDecimal(calculateDeviation(kokugo, deviationValues.kokugo.mean, deviationValues.kokugo.sd));
    const sugakuDeviation = roundToOneDecimal(calculateDeviation(sugaku, deviationValues.sugaku.mean, deviationValues.sugaku.sd));
    const eigoDeviation = roundToOneDecimal(calculateDeviation(eigo, deviationValues.eigo.mean, deviationValues.eigo.sd));
    const shakaiDeviation = roundToOneDecimal(calculateDeviation(shakai, deviationValues.shakai.mean, deviationValues.shakai.sd));
    const rikaDeviation = roundToOneDecimal(calculateDeviation(rika, deviationValues.rika.mean, deviationValues.rika.sd));

    // 平均偏差値を計算
    const averageDeviation = roundToOneDecimal((kokugoDeviation + sugakuDeviation + eigoDeviation + shakaiDeviation + rikaDeviation) / 5);
    console.log("Calc is succesfull!");

    // 結果を表示
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p class="deviation">国語 <span class="deviation-value">${kokugoDeviation.toFixed(1)}</span></p>
        <p class="deviation">数学 <span class="deviation-value">${sugakuDeviation.toFixed(1)}</span></p>
        <p class="deviation">英語 <span class="deviation-value">${eigoDeviation.toFixed(1)}</span></p>
        <p class="deviation">社会 <span class="deviation-value">${shakaiDeviation.toFixed(1)}</span></p>
        <p class="deviation">理科 <span class="deviation-value">${rikaDeviation.toFixed(1)}</span></p>
        <h3>5教科参考偏差値（平均） <span class="deviation-value">${averageDeviation.toFixed(1)}</span></h3>
    `;

}
