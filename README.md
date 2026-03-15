# input-kana

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML input element that only accepts kana (Japanese phonetic script).

## Demo
https://code4fukui.github.io/input-kana/

## Features
- Accepts only kana characters
- Converts half-width kana to full-width
- Removes unsupported characters
- Supports `maxlength` and `rows` attributes

## Usage
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

## License
MIT License