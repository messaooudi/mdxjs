import CALCULATIONCURRENTPASS from "../CALCULATIONCURRENTPASS";

test('CALCULATIONCURRENTPASS reserved word', () => {
  expect('CALCULATIONCURRENTPASS').toMatch(CALCULATIONCURRENTPASS.pattern as RegExp);
  expect('something else').not.toMatch(CALCULATIONCURRENTPASS.pattern as RegExp);
});