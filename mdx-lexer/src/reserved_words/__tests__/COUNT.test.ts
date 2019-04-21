import COUNT from "../COUNT";

test('COUNT reserved word', () => {
  expect('COUNT').toMatch(COUNT.pattern as RegExp);
  expect('something else').not.toMatch(COUNT.pattern as RegExp);
});