import BDESC from "../BDESC";

test('BDESC reserved word', () => {
  expect('BDESC').toMatch(BDESC.PATTERN as RegExp);
  expect('something else').not.toMatch(BDESC.PATTERN as RegExp);
});