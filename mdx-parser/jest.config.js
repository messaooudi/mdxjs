module.exports = {
  roots: ["./src"],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)?$",
  moduleFileExtensions: ["js","ts"],
  collectCoverageFrom: ["**/*.{js,ts}", "!**/node_modules/**"]
};