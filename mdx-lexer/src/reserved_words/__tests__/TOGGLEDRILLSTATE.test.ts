import TOGGLEDRILLSTATE from "../TOGGLEDRILLSTATE";

test('TOGGLEDRILLSTATE reserved word', () => {
  expect('TOGGLEDRILLSTATE').toMatch(TOGGLEDRILLSTATE.PATTERN as RegExp);
  expect('something else').not.toMatch(TOGGLEDRILLSTATE.PATTERN as RegExp);
});