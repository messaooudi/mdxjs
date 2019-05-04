import COMMA from "../COMMA";

test('COMMA symbol', () => {
  expect(",").toMatch(COMMA.PATTERN as RegExp);
  expect('something else').not.toMatch(COMMA.PATTERN as RegExp);
});