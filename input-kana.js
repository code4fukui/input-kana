import { KanaValidator } from "./KanaValidator.js";
import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";

class InputKana extends InputWithValidator {
  constructor() {
    super(new KanaValidator());
  }
}

customElements.define("input-kana", InputKana);

export { InputKana };
