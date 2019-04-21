import OR from "../OR";

test('OR reserved word', () => {
  expect('OR').toMatch(OR.pattern as RegExp);
  expect('something else').not.toMatch(OR.pattern as RegExp);
});