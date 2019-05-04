import POST from "../POST";

test('POST reserved word', () => {
  expect('POST').toMatch(POST.PATTERN as RegExp);
  expect('something else').not.toMatch(POST.PATTERN as RegExp);
});