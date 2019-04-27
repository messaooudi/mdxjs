import WHERE from "../WHERE";

test('WHERE reserved word', () => {
  expect('WHERE').toMatch(WHERE.PATTERN as RegExp);
  expect('something else').not.toMatch(WHERE.PATTERN as RegExp);
});