import ROOT from "../ROOT";

test('ROOT reserved word', () => {
  expect('ROOT').toMatch(ROOT.PATTERN as RegExp);
  expect('something else').not.toMatch(ROOT.PATTERN as RegExp);
});