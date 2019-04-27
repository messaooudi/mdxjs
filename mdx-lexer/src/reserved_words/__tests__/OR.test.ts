import OR from "../OR";

test('OR reserved word', () => {
  expect('OR').toMatch(OR.PATTERN as RegExp);
  expect('something else').not.toMatch(OR.PATTERN as RegExp);
});