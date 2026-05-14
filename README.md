# input-kana

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element `<input-kana>` that restricts input to Japanese kana. It automatically normalizes hiragana to katakana and validates characters in real-time.

## Demo

https://code4fukui.github.io/input-kana/

The demo shows single-line and multi-line usage of the component.

## Features

- **Hiragana to Katakana Conversion:** Automatically converts all hiragana input into the corresponding full-width katakana.
- **Character Validation:** Accepts katakana, numbers, and a specific set of Japanese symbols.
- **Normalization:** Converts full-width numbers and spaces to their half-width counterparts.
- **Invalid Character Removal:** Strips unsupported characters (e.g., alphabet, emoji, half-width kana) on input.
- **Standard Attribute Support:** Works with standard attributes like `maxlength`. Use the `rows` attribute to render a multi-line textarea.

## Usage

Import the module script, then use the `<input-kana>` tag in your HTML.

```html
<script type="module" src="https://code4fukui.github.io/input-kana/input-kana.js"></script>

<!-- Single-line input with a 10-character limit -->
<input-kana id="kana-input" maxlength="10" placeholder="カタカナ"></input-kana>

<!-- Multi-line input (textarea) -->
<input-kana rows="5"></input-kana>

<script type="module">
  const input = document.getElementById("kana-input");
  input.onchange = () => {
    // Value is always normalized to katakana
    console.log(input.value);
  };
</script>
```

## Dependencies

This component is built upon other modules:
- [code4fukui/input-number](https://github.com/code4fukui/input-number)
- [code4fukui/mojikiban](https://github.com/code4fukui/mojikiban)

## License

MIT