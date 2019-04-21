import TOGGLEDRILLSTATE from "../TOGGLEDRILLSTATE";

test('TOGGLEDRILLSTATE reserved word', () => {
  expect('TOGGLEDRILLSTATE').toMatch(TOGGLEDRILLSTATE.pattern as RegExp);
  expect('something else').not.toMatch(TOGGLEDRILLSTATE.pattern as RegExp);
});