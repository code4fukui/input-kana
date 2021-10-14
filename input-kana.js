import { KanaValidator } from "./KanaValidator.js";
import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";

class InputKana extends InputWithValidator {
  constructor(opts) {
    super(new KanaValidator(), opts);
  }
}

customElements.define("input-kana", InputKana);

export { InputKana };
