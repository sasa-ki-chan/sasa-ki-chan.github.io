// クリック要素を取得
const target = document.getElementById('sasaki');

// クリックイベントリスナーを追加
target.addEventListener('click', function () {
    // clickedクラスを切り替えて縮小アニメーションを開始
    target.classList.toggle('clicked');

    // 一定時間が経過したらclickedクラスを削除して元に戻す
    setTimeout(function () {
        target.classList.remove('clicked');
    }, 1000); // 1000ミリ秒（1秒）後に元に戻す
});
