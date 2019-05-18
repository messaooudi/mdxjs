import { ITokenConfig , createToken } from "chevrotain";

const CHAPTERS: ITokenConfig = {
    name: "CHAPTERS key word",
    label: "chapters",
    pattern: /CHAPTERS/
};

export default createToken(CHAPTERS);