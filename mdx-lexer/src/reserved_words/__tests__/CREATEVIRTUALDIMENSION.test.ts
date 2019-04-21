import CREATEVIRTUALDIMENSION from "../CREATEVIRTUALDIMENSION";

test('CREATEVIRTUALDIMENSION reserved word', () => {
  expect('CREATEVIRTUALDIMENSION').toMatch(CREATEVIRTUALDIMENSION.pattern as RegExp);
  expect('something else').not.toMatch(CREATEVIRTUALDIMENSION.pattern as RegExp);
});