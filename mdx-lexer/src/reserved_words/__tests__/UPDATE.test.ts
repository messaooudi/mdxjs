import UPDATE from "../UPDATE";

test('UPDATE reserved word', () => {
  expect('UPDATE').toMatch(UPDATE.PATTERN as RegExp);
  expect('something else').not.toMatch(UPDATE.PATTERN as RegExp);
});