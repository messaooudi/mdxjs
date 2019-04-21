import FIRSTSIBLING from "../FIRSTSIBLING";

test('FIRSTSIBLING reserved word', () => {
  expect('FIRSTSIBLING').toMatch(FIRSTSIBLING.pattern as RegExp);
  expect('something else').not.toMatch(FIRSTSIBLING.pattern as RegExp);
});