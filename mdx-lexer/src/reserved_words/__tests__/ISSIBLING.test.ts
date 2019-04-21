import ISSIBLING from "../ISSIBLING";

test('ISSIBLING reserved word', () => {
  expect('ISSIBLING').toMatch(ISSIBLING.pattern as RegExp);
  expect('something else').not.toMatch(ISSIBLING.pattern as RegExp);
});