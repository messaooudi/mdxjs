import COUNT from "../COUNT";

test('COUNT reserved word', () => {
  expect('COUNT').toMatch(COUNT.PATTERN as RegExp);
  expect('something else').not.toMatch(COUNT.PATTERN as RegExp);
});