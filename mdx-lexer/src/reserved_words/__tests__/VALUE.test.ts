import VALUE from "../VALUE";

test('VALUE reserved word', () => {
  expect('VALUE').toMatch(VALUE.pattern as RegExp);
  expect('something else').not.toMatch(VALUE.pattern as RegExp);
});