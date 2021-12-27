import * as t from "https://deno.land/std/testing/asserts.ts";
import { KanaValidator } from "./KanaValidator.js";

Deno.test("isValid", () => {
  const v = new KanaValidator();
  t.assert(v.isValid("ア"));
  t.assert(v.isValid("あ"));
  t.assert(!v.isValid("a"));
  t.assert(v.isValid("-")); // ng -> ok
  t.assert(!v.isValid("😍"));
  t.assert(v.isValid("1"));
  t.assert(v.isValid("１"));
});
Deno.test("normalize", () => {
  const v = new KanaValidator();
  //t.assertEquals(v.normalize("ｱ"), "ア"); // not supported yet
  t.assertEquals(v.normalize("ア"), "ア");
  t.assertEquals(v.normalize("あ"), "ア");
  t.assertEquals(v.normalize(""), "");
});
Deno.test("validate", () => {
  const v = new KanaValidator();
  t.assertEquals(v.validate("アイウ3"), "アイウ3");
  t.assertEquals(v.validate("アイウ３"), "アイウ3");
  t.assertEquals(v.validate("アイウ3あいう"), "アイウ3アイウ");
});
Deno.test("symbol", () => {
  const v = new KanaValidator();
  t.assertEquals(v.validate("（アイウ）"), "(アイウ)");
  t.assertEquals(v.validate("アイウ3【1】あいうA"), "アイウ3【1】アイウ");
});
