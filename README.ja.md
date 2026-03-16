# input-kana

カタカナ・ひらがなのみ入力可能な HTML 入力要素です。

## デモ
https://code4fukui.github.io/input-kana/

## 機能
- カタカナとひらがなの入力を可能にする
- 半角カナを全角に変換する
- 非対応文字を除去する
- `maxlength` と `rows` 属性をサポートする

## 使い方
```html
<script type="module" src="https://code4fukui.github.io/input-kana/input-kana.js"></script>
<input-kana id=inp maxlength=10></input-kana>

<script type="module">
onload = () => {
  inp.onchange = () => {
    console.log(inp.value);
  };
};
</script>
```

## ライセンス
MIT License