import MIN from "../MIN";

test('MIN reserved word', () => {
  expect('MIN').toMatch(MIN.PATTERN as RegExp);
  expect('something else').not.toMatch(MIN.PATTERN as RegExp);
});