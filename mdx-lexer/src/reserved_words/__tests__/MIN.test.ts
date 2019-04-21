import MIN from "../MIN";

test('MIN reserved word', () => {
  expect('MIN').toMatch(MIN.pattern as RegExp);
  expect('something else').not.toMatch(MIN.pattern as RegExp);
});