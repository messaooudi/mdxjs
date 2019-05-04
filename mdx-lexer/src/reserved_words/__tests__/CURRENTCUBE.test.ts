import CURRENTCUBE from "../CURRENTCUBE";

test('CURRENTCUBE reserved word', () => {
  expect('CURRENTCUBE').toMatch(CURRENTCUBE.PATTERN as RegExp);
  expect('something else').not.toMatch(CURRENTCUBE.PATTERN as RegExp);
});