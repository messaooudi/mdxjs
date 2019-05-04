import { ITokenConfig, createToken } from "chevrotain";
import identifiers from "../identifiers";

const LEFT_BRACKET: ITokenConfig = {
  label: "left bracket symbol",
  name: "left bracket",
  pattern: /\[/,
  longer_alt: identifiers.DELIMITED_IDENTIFIER
};

export default createToken(LEFT_BRACKET);
