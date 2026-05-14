# input-kana

日本語のカナ入力に制限するカスタムHTML要素 `<input-kana>` です。ひらがなを自動的にカタカナに正規化し、リアルタイムで文字の検証を行います。

## デモ

https://code4fukui.github.io/input-kana/

デモでは、コンポーネントの単一行および複数行での使用例を確認できます。

## 機能

- **ひらがなからカタカナへの変換:** 入力されたすべてのひらがなを対応する全角カタカナに自動変換します。
- **文字の検証:** カタカナ、数字、および特定の日本語記号を受け付けます。
- **正規化:** 全角の数字やスペースを半角に変換します。
- **無効な文字の削除:** サポートされていない文字（例: アルファベット、絵文字、半角カナ）を入力時に取り除きます。
- **標準属性のサポート:** `maxlength` などの標準属性に対応しています。`rows` 属性を使用すると、複数行のテキストエリアとしてレンダリングされます。

## 使い方

モジュールスクリプトをインポートし、HTML内で `<input-kana>` タグを使用します。

```html
<script type="module" src="https://code4fukui.github.io/input-kana/input-kana.js"></script>

<!-- 10文字制限の単一行入力 -->
<input-kana id="kana-input" maxlength="10" placeholder="カタカナ"></input-kana>

<!-- 複数行入力（テキストエリア） -->
<input-kana rows="5"></input-kana>

<script type="module">
  const input = document.getElementById("kana-input");
  input.onchange = () => {
    // 値は常にカタカナに正規化されます
    console.log(input.value);
  };
</script>
```

## 依存関係

このコンポーネントは以下のモジュールを利用して構築されています:
- [code4fukui/input-number](https://github.com/code4fukui/input-number)
- [code4fukui/mojikiban](https://github.com/code4fukui/mojikiban)

## ライセンス

MIT
