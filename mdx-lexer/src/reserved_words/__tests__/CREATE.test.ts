import CREATE from "../CREATE";

test('CREATE reserved word', () => {
  expect('CREATE').toMatch(CREATE.PATTERN as RegExp);
  expect('something else').not.toMatch(CREATE.PATTERN as RegExp);
});