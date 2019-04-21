fs = require('fs');

const word = process.argv[2];

const wordContent = `import { ITokenConfig } from "chevrotain"

const ${word}: ITokenConfig = {
    label: "${word} key word",
    name: "${word.toLocaleLowerCase()}",
    pattern: /${word}/
};

export default ${word};`
const testContent = `import ${word} from "../${word}";

test('${word} reserved word', () => {
  expect('${word}').toMatch(${word}.pattern as RegExp);
  expect('something else').not.toMatch(${word}.pattern as RegExp);
});`

fs.writeFileSync(`${word}.ts`, wordContent)
fs.writeFileSync(`./__tests__/${word}.test.ts`, testContent)