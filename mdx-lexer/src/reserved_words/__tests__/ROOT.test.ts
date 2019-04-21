import ROOT from "../ROOT";

test('ROOT reserved word', () => {
  expect('ROOT').toMatch(ROOT.pattern as RegExp);
  expect('something else').not.toMatch(ROOT.pattern as RegExp);
});