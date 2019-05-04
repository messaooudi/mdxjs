import ASC from "../ASC";

test('ASC reserved word', () => {
  expect('ASC').toMatch(ASC.PATTERN as RegExp);
  expect('something else').not.toMatch(ASC.PATTERN as RegExp);
});