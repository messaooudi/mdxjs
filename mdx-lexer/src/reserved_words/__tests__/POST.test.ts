import POST from "../POST";

test('POST reserved word', () => {
  expect('POST').toMatch(POST.pattern as RegExp);
  expect('something else').not.toMatch(POST.pattern as RegExp);
});