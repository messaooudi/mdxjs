import STRTOMEMBER from "../STRTOMEMBER";

test('STRTOMEMBER reserved word', () => {
  expect('STRTOMEMBER').toMatch(STRTOMEMBER.pattern as RegExp);
  expect('something else').not.toMatch(STRTOMEMBER.pattern as RegExp);
});