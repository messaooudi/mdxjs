import THIS from "../THIS";

test('THIS reserved word', () => {
  expect('THIS').toMatch(THIS.PATTERN as RegExp);
  expect('something else').not.toMatch(THIS.PATTERN as RegExp);
});