import SELF from "../SELF";

test('SELF reserved word', () => {
  expect('SELF').toMatch(SELF.pattern as RegExp);
  expect('something else').not.toMatch(SELF.pattern as RegExp);
});