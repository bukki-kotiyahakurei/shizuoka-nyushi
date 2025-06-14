const recordButton = document.getElementById('recordButton');
const stopButton = document.getElementById('stopButton');
const audioPlayer = document.getElementById('audioPlayer');
const downloadLink = document.getElementById('downloadLink');
const durationInput = document.getElementById('duration');
const timerDisplay = document.getElementById('timerDisplay');

let mediaRecorder;
let audioChunks = [];
let timer; // setTimeoutのIDを保持する変数
let countdownInterval; // setIntervalのIDを保持する変数

// 録音開始ボタンの処理
recordButton.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            // タイマーとカウントダウンをクリア
            clearTimeout(timer);
            clearInterval(countdownInterval);

            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);

            audioPlayer.src = audioUrl;
            downloadLink.href = audioUrl;
            downloadLink.download = `recording_${new Date().toISOString()}.wav`;
            downloadLink.style.display = 'block';

            // UIをリセット
            recordButton.disabled = false;
            stopButton.disabled = true;
            durationInput.disabled = false;
            timerDisplay.textContent = '---';

            audioChunks = [];
        };

        mediaRecorder.start();

        // UIの更新
        recordButton.disabled = true;
        stopButton.disabled = false;
        durationInput.disabled = true; // 録音中は時間を変更できないようにする
        downloadLink.style.display = 'none';

        // タイマー処理を開始
        const duration = parseInt(durationInput.value, 10);
        if (duration > 0) {
            // カウントダウン表示を開始
            let timeLeft = duration;
            timerDisplay.textContent = `${timeLeft} 秒`;
            countdownInterval = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = `${timeLeft} 秒`;
                if (timeLeft <= 0) {
                    clearInterval(countdownInterval);
                }
            }, 1000);

            // 指定時間後に録音を停止するタイマーを設定
            timer = setTimeout(() => {
                if (mediaRecorder.state === "recording") {
                    mediaRecorder.stop();
                }
            }, duration * 1000);
        }

    } catch (err) {
        console.error("マイクへのアクセスエラー:", err);
        alert("マイクへのアクセスが許可されませんでした。");
    }
});

// 録音停止ボタンの処理
stopButton.addEventListener('click', () => {
    // 手動停止の場合も、設定されたタイマーをクリアする
    clearTimeout(timer);
    clearInterval(countdownInterval);

    if (mediaRecorder.state === "recording") {
        mediaRecorder.stop();
    }
});