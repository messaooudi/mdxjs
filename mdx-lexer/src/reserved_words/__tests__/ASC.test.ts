import ASC from "../ASC";

test('ASC reserved word', () => {
  expect('ASC').toMatch(ASC.pattern as RegExp);
  expect('something else').not.toMatch(ASC.pattern as RegExp);
});