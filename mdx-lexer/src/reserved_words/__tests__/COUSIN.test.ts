import COUSIN from "../COUSIN";

test('COUSIN reserved word', () => {
  expect('COUSIN').toMatch(COUSIN.pattern as RegExp);
  expect('something else').not.toMatch(COUSIN.pattern as RegExp);
});