import VALUE from "../VALUE";

test('VALUE reserved word', () => {
  expect('VALUE').toMatch(VALUE.PATTERN as RegExp);
  expect('something else').not.toMatch(VALUE.PATTERN as RegExp);
});