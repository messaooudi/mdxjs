import LASTSIBLING from "../LASTSIBLING";

test('LASTSIBLING reserved word', () => {
  expect('LASTSIBLING').toMatch(LASTSIBLING.pattern as RegExp);
  expect('something else').not.toMatch(LASTSIBLING.pattern as RegExp);
});