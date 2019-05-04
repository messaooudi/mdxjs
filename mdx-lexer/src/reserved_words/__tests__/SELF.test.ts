import SELF from "../SELF";

test('SELF reserved word', () => {
  expect('SELF').toMatch(SELF.PATTERN as RegExp);
  expect('something else').not.toMatch(SELF.PATTERN as RegExp);
});