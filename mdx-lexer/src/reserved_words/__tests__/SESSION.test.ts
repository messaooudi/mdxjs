import SESSION from "../SESSION";

test('SESSION reserved word', () => {
  expect('SESSION').toMatch(SESSION.PATTERN as RegExp);
  expect('something else').not.toMatch(SESSION.PATTERN as RegExp);
});