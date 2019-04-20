import BDESC from "../BDESC";

test('BDESC reserved word', () => {
  expect('BDESC').toMatch(BDESC.pattern as RegExp);
  expect('something else').not.toMatch(BDESC.pattern as RegExp);
});