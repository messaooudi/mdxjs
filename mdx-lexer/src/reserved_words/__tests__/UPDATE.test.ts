import UPDATE from "../UPDATE";

test('UPDATE reserved word', () => {
  expect('UPDATE').toMatch(UPDATE.pattern as RegExp);
  expect('something else').not.toMatch(UPDATE.pattern as RegExp);
});