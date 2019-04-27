import LASTSIBLING from "../LASTSIBLING";

test('LASTSIBLING reserved word', () => {
  expect('LASTSIBLING').toMatch(LASTSIBLING.PATTERN as RegExp);
  expect('something else').not.toMatch(LASTSIBLING.PATTERN as RegExp);
});