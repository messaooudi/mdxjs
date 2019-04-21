import THIS from "../THIS";

test('THIS reserved word', () => {
  expect('THIS').toMatch(THIS.pattern as RegExp);
  expect('something else').not.toMatch(THIS.pattern as RegExp);
});