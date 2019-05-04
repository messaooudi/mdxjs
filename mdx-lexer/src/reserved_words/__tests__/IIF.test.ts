import IIF from "../IIF";

test('IIF reserved word', () => {
  expect('IIF').toMatch(IIF.PATTERN as RegExp);
  expect('something else').not.toMatch(IIF.PATTERN as RegExp);
});