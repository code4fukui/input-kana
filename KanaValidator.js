//import { Validator } from "../input-number/Validator.js";
import { Validator } from "https://code4fukui.github.io/input-number/Validator.js";

const zenkana1 = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォッャュョー゛゜。、「」";
const zenkana2 = "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴ";
const zenkana = zenkana1 + zenkana2;

const zenhira1 = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんぁぃぅぇぉっゃゅょー゛゜。、「」";
const zenhira2 = "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ";
const zenhira3 = "う゛";
const zenhira = zenhira1 + zenhira2 + zenhira3;

class KanaValidator extends Validator {
  isValid(c) {
    if (c == "") {
      return false;
    }
    if (c == "　" || c == " ") {
      return true;
    }
    if (zenkana.indexOf(c) >= 0) {
      return true;
    }
    if (zenhira.indexOf(c) >= 0) {
      return true;
    }
    return false;
  }
  normalize(c) {
    if (c == "　" || c == " ") {
      return " ";
    }
    if (zenkana.indexOf(c) >= 0) {
      return c;
    }
    const n = zenhira.indexOf(c);
    if (n >= 0) {
      return zenkana[n];
    }
    // todo: support う゛
    // todo: hankaku -> zenkaku
    return "";
  }
}

export { KanaValidator };
