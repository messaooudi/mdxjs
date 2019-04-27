import INTERSECT from "../INTERSECT";

test('INTERSECT reserved word', () => {
  expect('INTERSECT').toMatch(INTERSECT.PATTERN as RegExp);
  expect('something else').not.toMatch(INTERSECT.PATTERN as RegExp);
});