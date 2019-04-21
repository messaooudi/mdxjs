import SESSION from "../SESSION";

test('SESSION reserved word', () => {
  expect('SESSION').toMatch(SESSION.pattern as RegExp);
  expect('something else').not.toMatch(SESSION.pattern as RegExp);
});