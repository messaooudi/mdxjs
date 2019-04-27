import ISSIBLING from "../ISSIBLING";

test('ISSIBLING reserved word', () => {
  expect('ISSIBLING').toMatch(ISSIBLING.PATTERN as RegExp);
  expect('something else').not.toMatch(ISSIBLING.PATTERN as RegExp);
});