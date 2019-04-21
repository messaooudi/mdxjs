import SUM from "../SUM";

test('SUM reserved word', () => {
  expect('SUM').toMatch(SUM.pattern as RegExp);
  expect('something else').not.toMatch(SUM.pattern as RegExp);
});