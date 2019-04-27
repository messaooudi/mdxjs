import COUSIN from "../COUSIN";

test('COUSIN reserved word', () => {
  expect('COUSIN').toMatch(COUSIN.PATTERN as RegExp);
  expect('something else').not.toMatch(COUSIN.PATTERN as RegExp);
});