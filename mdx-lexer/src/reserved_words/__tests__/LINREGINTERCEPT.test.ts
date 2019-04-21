import LINREGINTERCEPT from "../LINREGINTERCEPT";

test('LINREGINTERCEPT reserved word', () => {
  expect('LINREGINTERCEPT').toMatch(LINREGINTERCEPT.pattern as RegExp);
  expect('something else').not.toMatch(LINREGINTERCEPT.pattern as RegExp);
});