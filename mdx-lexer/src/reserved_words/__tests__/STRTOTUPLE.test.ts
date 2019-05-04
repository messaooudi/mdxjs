import STRTOTUPLE from "../STRTOTUPLE";

test('STRTOTUPLE reserved word', () => {
  expect('STRTOTUPLE').toMatch(STRTOTUPLE.PATTERN as RegExp);
  expect('something else').not.toMatch(STRTOTUPLE.PATTERN as RegExp);
});