import { Lexer, TokenTypeDictionary } from "chevrotain";
import white_space from "./white_space";
import comments from "./comments";
import operators from "./operators";
import numbers from "./numbers";
import symbols from "./symblos";
import reserved_words from "./reserved_words";
import identifiers from "./identifiers";

const tokens : TokenTypeDictionary = {
  ...white_space,
  ...comments,
  ...operators.arithmetic_operators,
  ...operators.comparison_operators,
  ...numbers,
  ...symbols,
  ...reserved_words,
  ...identifiers
};

const lexer = new Lexer(Object.values(tokens));

export { lexer,tokens };
