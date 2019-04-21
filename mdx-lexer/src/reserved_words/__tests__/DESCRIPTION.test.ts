import DESCRIPTION from "../DESCRIPTION";

test('DESCRIPTION reserved word', () => {
  expect('DESCRIPTION').toMatch(DESCRIPTION.pattern as RegExp);
  expect('something else').not.toMatch(DESCRIPTION.pattern as RegExp);
});