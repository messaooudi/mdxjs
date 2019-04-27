import FORWARD_SLASH_ASTERISK_PAIRS from "../FORWARD_SLASH_ASTERISK_PAIRS";

test('FORWARD_SLASH_ASTERISK_PAIRS comment', () => {
  expect(`/* this is
             a valid comment */`).toMatch(FORWARD_SLASH_ASTERISK_PAIRS.PATTERN as RegExp);
  expect('something else').not.toMatch(FORWARD_SLASH_ASTERISK_PAIRS.PATTERN as RegExp);
});