import NOT_RELATED_TO_FACTS from "../NOT_RELATED_TO_FACTS";

test('NOT_RELATED_TO_FACTS reserved word', () => {
  expect('NOT_RELATED_TO_FACTS').toMatch(NOT_RELATED_TO_FACTS.PATTERN as RegExp);
  expect('something else').not.toMatch(NOT_RELATED_TO_FACTS.PATTERN as RegExp);
});