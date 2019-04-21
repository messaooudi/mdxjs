import ADD from "../ADD";

test('ADD arithmetic operator', () => {
  expect('+').toMatch(ADD.pattern as RegExp);
  expect('something else').not.toMatch(ADD.pattern as RegExp);
});