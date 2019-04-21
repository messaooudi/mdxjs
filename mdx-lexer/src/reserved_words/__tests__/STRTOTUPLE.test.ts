import STRTOTUPLE from "../STRTOTUPLE";

test('STRTOTUPLE reserved word', () => {
  expect('STRTOTUPLE').toMatch(STRTOTUPLE.pattern as RegExp);
  expect('something else').not.toMatch(STRTOTUPLE.pattern as RegExp);
});