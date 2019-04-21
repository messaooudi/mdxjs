import WHERE from "../WHERE";

test('WHERE reserved word', () => {
  expect('WHERE').toMatch(WHERE.pattern as RegExp);
  expect('something else').not.toMatch(WHERE.pattern as RegExp);
});