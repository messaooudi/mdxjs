import SUM from "../SUM";

test('SUM reserved word', () => {
  expect('SUM').toMatch(SUM.PATTERN as RegExp);
  expect('something else').not.toMatch(SUM.PATTERN as RegExp);
});