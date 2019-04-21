import CREATE from "../CREATE";

test('CREATE reserved word', () => {
  expect('CREATE').toMatch(CREATE.pattern as RegExp);
  expect('something else').not.toMatch(CREATE.pattern as RegExp);
});