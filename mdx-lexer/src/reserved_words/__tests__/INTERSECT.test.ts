import INTERSECT from "../INTERSECT";

test('INTERSECT reserved word', () => {
  expect('INTERSECT').toMatch(INTERSECT.pattern as RegExp);
  expect('something else').not.toMatch(INTERSECT.pattern as RegExp);
});