import STRTOMEMBER from "../STRTOMEMBER";

test('STRTOMEMBER reserved word', () => {
  expect('STRTOMEMBER').toMatch(STRTOMEMBER.PATTERN as RegExp);
  expect('something else').not.toMatch(STRTOMEMBER.PATTERN as RegExp);
});