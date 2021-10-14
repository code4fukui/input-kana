import * as t from "https://deno.land/std/testing/asserts.ts";
import { KanaValidator } from "./KanaValidator.js";

Deno.test("isValid", () => {
  const v = new KanaValidator();
  t.assert(v.isValid("ア"));
  t.assert(!v.isValid("あ"));
  t.assert(!v.isValid("a"));
  t.assert(!v.isValid("-"));
  t.assert(!v.isValid("😍"));
});
Deno.test("normalize", () => {
  const v = new KanaValidator();
  t.assertEquals(v.normalize("ｱ"), "ア");
  t.assertEquals(v.normalize("ア"), "ア");
  t.assertEquals(v.normalize(""), "");
});
Deno.test("validate", () => {
  const v = new KanaValidator();
  t.assertEquals(v.validate("アイウ3"), "アイウ");
});
