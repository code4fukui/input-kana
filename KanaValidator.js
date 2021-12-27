//import { Validator } from "../input-number/Validator.js";
import { Validator } from "https://code4fukui.github.io/input-number/Validator.js";
import { ZenkakuAlpha } from "https://code4fukui.github.io/mojikiban/ZenkakuAlpha.js";

const zenkana1 = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォッャュョー゛゜。、「」";
const zenkana2 = "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴ";
const zenkana = zenkana1 + zenkana2;

const zenhira1 = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんぁぃぅぇぉっゃゅょー゛゜。、「」";
const zenhira2 = "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ";
const zenhira3 = "う゛";
const zenhira = zenhira1 + zenhira2 + zenhira3;

const symbol = "〇〈〉《》「」『』【】〒〓〔〕〖〗〘〙〜〝〟〠・ー　";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
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
    if (symbol.indexOf(c) >= 0) {
      return true;
    }
    const c2 = ZenkakuAlpha.toHan(c);
    if (alphabet.indexOf(c2.toLowerCase()) >= 0) {
      return false;
    }
    if (ZenkakuAlpha.isHan(c2)) {
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
    if (symbol.indexOf(c) >= 0) {
      return c;
    }
    const c2 = ZenkakuAlpha.toHan(c);
    if (alphabet.indexOf(c2.toLowerCase()) >= 0) {
      return "";
    }
    if (ZenkakuAlpha.isHan(c2)) {
      return c2;
    }
    // todo: support う゛
    // todo: hankaku -> zenkaku
    return "";
  }
}

export { KanaValidator };
