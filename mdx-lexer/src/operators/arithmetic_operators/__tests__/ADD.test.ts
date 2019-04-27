import ADD from "../ADD";

test('ADD arithmetic operator', () => {
  expect('+').toMatch(ADD.PATTERN as RegExp);
  expect('something else').not.toMatch(ADD.PATTERN as RegExp);
});