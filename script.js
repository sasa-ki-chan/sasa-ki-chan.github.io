// ページ内のすべての要素を取得
const elements = document.querySelectorAll('*');

// 有効なクラスとクエリを格納する配列
const validStyles = [];

// 各要素についてクラスとクエリを確認
elements.forEach((element) => {
    const computedStyle = getComputedStyle(element);
    const classes = element.classList;

    // クラスの確認
    classes.forEach((className) => {
        if (computedStyle.getPropertyValue('color') === 'rgb(255, 0, 0)' &&
            computedStyle.getPropertyValue('font-size') === '24px') {
            validStyles.push(`クラス "${className}" が適用されています。`);
        }
    });

    // クエリの確認
    if (computedStyle.getPropertyValue('border-top-color') === 'rgb(0, 0, 255)') {
        validStyles.push('メディアクエリ内のスタイルが適用されています。');
    }
});

// 結果を表示
const resultElement = document.getElementById('result');
if (validStyles.length > 0) {
    resultElement.textContent = '以下のスタイルが有効になっています：\n\n' + validStyles.join('\n');
} else {
    resultElement.textContent = '有効なスタイルは見つかりませんでした。';
}
