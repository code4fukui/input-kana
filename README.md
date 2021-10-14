# input-kana

- カナのみ入力可能な入力ボックス
- https://code4fukui.github.io/input-kana/

## usage

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
