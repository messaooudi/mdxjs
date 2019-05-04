import FIRSTSIBLING from "../FIRSTSIBLING";

test('FIRSTSIBLING reserved word', () => {
  expect('FIRSTSIBLING').toMatch(FIRSTSIBLING.PATTERN as RegExp);
  expect('something else').not.toMatch(FIRSTSIBLING.PATTERN as RegExp);
});