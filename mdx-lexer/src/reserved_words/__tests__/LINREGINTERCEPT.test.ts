import LINREGINTERCEPT from "../LINREGINTERCEPT";

test('LINREGINTERCEPT reserved word', () => {
  expect('LINREGINTERCEPT').toMatch(LINREGINTERCEPT.PATTERN as RegExp);
  expect('something else').not.toMatch(LINREGINTERCEPT.PATTERN as RegExp);
});