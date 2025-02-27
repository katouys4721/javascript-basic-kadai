//id:btnのHTML要素を取得、定数に代入
const eventBtn = document.getElementById('btn');
//id:textのHTML要素を取得、定数に代入
const changeText = document.getElementById('text');

//クリックでイベント処理
eventBtn.addEventListener('click',() => {
    changeText.textContent = 'ボタンをクリックしました';
});