import IIF from "../IIF";

test('IIF reserved word', () => {
  expect('IIF').toMatch(IIF.pattern as RegExp);
  expect('something else').not.toMatch(IIF.pattern as RegExp);
});