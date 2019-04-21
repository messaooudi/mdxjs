import CURRENTCUBE from "../CURRENTCUBE";

test('CURRENTCUBE reserved word', () => {
  expect('CURRENTCUBE').toMatch(CURRENTCUBE.pattern as RegExp);
  expect('something else').not.toMatch(CURRENTCUBE.pattern as RegExp);
});