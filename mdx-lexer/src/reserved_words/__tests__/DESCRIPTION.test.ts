import DESCRIPTION from "../DESCRIPTION";

test('DESCRIPTION reserved word', () => {
  expect('DESCRIPTION').toMatch(DESCRIPTION.PATTERN as RegExp);
  expect('something else').not.toMatch(DESCRIPTION.PATTERN as RegExp);
});