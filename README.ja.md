# input-kana

カナ (日本語の仮名) のみ入力可能な入力ボックスです。

## デモ
https://code4fukui.github.io/input-kana/

## 機能
- カタカナ、ひらがなの入力が可能
- 全角英数字、記号の入力を許可
- 入力値の整形・バリデーション

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