import CALCULATIONPASSVALUE from "../CALCULATIONPASSVALUE";

test('CALCULATIONPASSVALUE reserved word', () => {
  expect('CALCULATIONPASSVALUE').toMatch(CALCULATIONPASSVALUE.pattern as RegExp);
  expect('something else').not.toMatch(CALCULATIONPASSVALUE.pattern as RegExp);
});